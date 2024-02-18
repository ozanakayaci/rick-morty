import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import BigCard from "../../components/BigCard/BigCard.js";

import axios from "axios";
import Card from "../../components/BigCard/Card/Card.js";


function Character(props) {
  let { charid } = useParams();

  const [egg, setEgg] = useState(Math.floor(Math.random() * 3));

  const [loading, setLoading] = useState(false);

  //for all characters
  const [characters, setCharacters] = useState([]);
  //for single character
  const [character, setCharacter] = useState({id:0});
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
          toast.error(
            "Cheers to failed character searches, Morty!"
          );
        });
    } catch (e) {
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
      if (response.data.id) {
        setLoading(false);
        console.log("test")
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
          {props.filteredWord && egg == 0 ? (
            <div className="text-green-500 flex flex-col items-center max-w-lg">
              <img
                width={200}
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                alt=""
              />
              <div className="mt-5">
                Ugh, Morty, seriously? You can't even manage to find a character
                on a website? It's not rocket science, Morty! Get it together!
                Maybe put in a little effort next time, huh?
              </div>
            </div>
          ) : props.filteredWord && egg == 1 ? (
            <div className="text-green-500 flex flex-col items-center max-w-lg">
              <img
                width={200}
                src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
                alt=""
              />
              <div className="mt-5">
                Oh, um, okay. Let me try this, Morty. Uh, hey, I-I tried looking
                for the character, but, um, couldn't find it. Maybe, you know,
                we could, uh, double-check the spelling or, uh, look into the,
                uh, website's settings? I-I don't want to mess things up, you
                know?
              </div>
            </div>
          ) : (
            <div className="text-green-500 flex flex-col items-center max-w-lg">
              <img
                width={200}
                src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
                alt=""
              />
              <div className="mt-5">
                Oh, great, Morty messed up the website search again. Can't find
                the character, huh? Typical Morty move. Well, I guess someone
                has to clean up the mess. Let me fix this, like always.
              </div>
            </div>
          )}
          ...
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
            <Card item={character} type={"character"} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Character;
