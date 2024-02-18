import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  characterIDs: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addCharacterID: (state, action) => {
      if (state.characterIDs.length < 11) {
        if (state.characterIDs.indexOf(action.payload) === -1) {
          state.characterIDs = [...state.characterIDs, action.payload];
        }

        let localFavorites = JSON.parse(localStorage.getItem("favorites"));

        if (localFavorites) {
          localFavorites.indexOf(action.payload) === -1 &&
            localFavorites.push(action.payload);
          localStorage.setItem("favorites", JSON.stringify(localFavorites));
        } else {
          localStorage.setItem("favorites", JSON.stringify([action.payload]));
        }
      } else {
        toast.error("You can only have 10 favorite character, Morty!");
      }
    },
    removeCharacterID: (state, action) => {
      console.log("state",action)
      state.characterIDs = state.characterIDs.filter(
        (id) => id !== action.payload
      );
      let localFavorites = JSON.parse(localStorage.getItem("favorites"));

      localFavorites = localFavorites.filter((id) => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(localFavorites));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCharacterID, removeCharacterID } = favoritesSlice.actions;

export default favoritesSlice.reducer;
