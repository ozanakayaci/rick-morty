import { useState } from "react";
import BigCard from "./BigCard/BigCard";

function Home() {
  const [charactersIDs, setCharactersIDs] = useState([1, 2]);
  const [episodesIDs, setEpisodesIDs] = useState([]);
  const [locationsIDs, setLocationsIDs] = useState([]);

  //charactersIDs.length == 6 olana kadar 1 ile 826 arasında rastgele sayı üret ve charactersIDs arrayine ekle
  if (charactersIDs.length < 6) {
    let randomNumber = Math.floor(Math.random() * 826) + 1;
    if (!charactersIDs.includes(randomNumber)) {
      setCharactersIDs([...charactersIDs, randomNumber]);
    }
  }

  //episodesIDs.length == 6 olana kadar 1 ile 51 arasında rastgele sayı üret ve episodesIDs arrayine ekle
  if (episodesIDs.length < 6) {
    let randomNumber = Math.floor(Math.random() * 51) + 1;
    if (!episodesIDs.includes(randomNumber)) {
      setEpisodesIDs([...episodesIDs.sort(), randomNumber]);
    }
  }

  //locationsIDs.length == 6 olana kadar 1 ile 128 arasında rastgele sayı üret ve locationsIDs arrayine ekle
  if (locationsIDs.length < 6) {
    let randomNumber = Math.floor(Math.random() * 126) + 1;
    if (!locationsIDs.includes(randomNumber)) {
      setLocationsIDs([...locationsIDs.sort(), randomNumber]);
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        <BigCard ids={charactersIDs} type={"character"} />
        <BigCard ids={episodesIDs} type={"episode"} />
        <BigCard ids={locationsIDs} type={"location"} />
      </div>
    </div>
  );
}

export default Home;
