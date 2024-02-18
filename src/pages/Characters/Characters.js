import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import BigCard from "../../components/BigCard/BigCard.js";

import axios from "axios";
import Card from "../../components/BigCard/Card/Card.js";

const initialState = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/37",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

function Character(props) {
  let { charid } = useParams();

  const [loading, setLoading] = useState(true);

  //for all characters
  const [characters, setCharacters] = useState([]);
  //for single character
  const [character, setCharacter] = useState();
  // pagination
  const [pageChar, setPageChar] = useState([1, 0]);

  useEffect(() => {
    if (charid == undefined) {
      handleGetAllCharacters();
    }
  }, [pageChar[0], charid, props.filteredWord]);

  useEffect(() => {
    if (charid != undefined) {
      handleGetCharacter();
    }
  }, [charid]);

  //get all characters
  const handleGetAllCharacters = () => {
    setLoading(true);
    try {
      axios(
        //filter by name if there is a filtered word
        `${process.env.REACT_APP_ENDPOINT}character/?page=${pageChar[0]}${
          !props.filteredWord ? "" : `&name=${props.filteredWord}`
        }`
      )
        .then(function (response) {
          setCharacters(response.data.results);
          setPageChar([pageChar[0], response.data.info.pages]);
          setLoading(false);
        })
        .catch((e) => {
          console.log("second");
          toast.error(
            "Can't find the character, Morty. Code harder next time."
          );
        });
    } catch (e) {
      console.log("first");
      toast.error("Nothing found");
    }
  };

  //get single character
  const handleGetCharacter = async () => {
    setLoading(true);

    try {
      const response = await axios(
        `${process.env.REACT_APP_ENDPOINT}character/${charid}`
      );
      setCharacter(response.data);
      if(response.data.id){
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {loading ? (
        //loading
        <div className={`flex justify-center flex-wrap m-3`}>
          {props.filteredWord && (
            <div className="text-green-500 flex flex-col items-center max-w-lg">
              <img
                width={200}
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                alt=""
              />
              <div className="mt-5">
                Morty, did you enter the character's name into the website's
                search engine? Okay, there's something simple here, Morty. Next
                time, you gotta be more careful, you know? Make sure you spell
                the character's name correctly; it's a pretty basic thing,
                Morty. If it still can't be found, maybe you need to take a bit
                more of a scientific approach behind the scenes of the site,
                yeah, science solves everything, Morty. Check the content, check
                the database, and of course, check the code. Do you understand,
                Morty? It's a bit more complicated, but you gotta fix this site,
                otherwise, no one's gonna appreciate your scientific genius.
                Now, let's go fix this problem, Morty, it's like saving the
                world or something!
              </div>
            </div>
          )}...
        </div>
      ) : charid == undefined ? (
        // multiple characters
        <BigCard
          page={pageChar}
          setPage={setPageChar}
          data={characters}
          type={"character"}
        />
      ) : (
        // single character
        <div>
          <div className={`flex justify-center flex-wrap m-3`}>
            {console.log(character.id, "character.id")}
            <Card item={character} type={"character"} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Character;
