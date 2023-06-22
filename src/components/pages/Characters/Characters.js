import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import BigCard from "../../Home/BigCard/BigCard";

import axios from "axios";

function Character() {
  let { charid } = useParams();

  const [charData, setCharData] = useState();
  const [charactersIDs, setCharactersIDs] = useState([1, 2]);
  console.log(charactersIDs);

  useEffect(() => {
    axios(
      `${process.env.REACT_APP_ENDPOINT}character/${
        charid != undefined ? charid : ""
      }`
    ).then(function (response) {
      setCharData(response.data.results);
      for (let i = 2; i < 20; i++) {
        if (charactersIDs.indexOf(response.data.results[i].id) == -1) {
          setCharactersIDs((current) => [
            ...current,
            response.data.results[i].id,
          ]);
        } else continue;
      }
    });
  }, []);

  return (
    <div>
      {charid == undefined ? (
        <BigCard ids={charactersIDs} type={"character"} />
      ) : (
        //all characters ********************************
        <div className="characters relative border-2 border-indigo-50 border-b-4 border-b-purple-600 rounded-lg m-3">
          {charid}
        </div> //all characters endpoint ********************************
      )}
    </div>
  );
}

export default Character;
