import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

function Card(props) {
  const [charData, setCharData] = useState();
  const [loading, setLoading] = useState(true);
  const [dataType, setDataType] = useState(props.type);

  useEffect(() => {
    axios(`${process.env.REACT_APP_ENDPOINT}${props.type}/${props.id}`).then(
      function (response) {
        setCharData(response.data);
        setLoading(false);
        setDataType(props.type);
      }
    );
  }, []);

  return (
    <div
      className={`${
        (props.id == 1 || props.id == 2) && props.type == "character"
          ? "col-span-2"
          : ""
      } border-solid border-2 border-indigo-600`}
    >
      {!loading ? (
        <div>
          {props.type == "character" ? (
            <div className="characters">
              <img src={charData.image} alt="" />
              <Link to={`${dataType}s/${props.id}`}>{charData.name}</Link>
            </div>
          ) : dataType == "episode" ? (
            <div className="episodes">
              <Link to={`${dataType}s/${props.id}`}>{charData.name}</Link>
            </div>
          ) : (
            <div className="locations">
              <Link to={`${dataType}s/${props.id}`}>{charData.name}</Link>
            </div>
          )}
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default Card;
