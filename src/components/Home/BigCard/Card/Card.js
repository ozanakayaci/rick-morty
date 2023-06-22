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

  return !loading ? (
    <div>
      <div>
        {props.type == "character" ? (
          //characterCards ********************************
          <div className="characters relative border-2 border-indigo-50 border-b-4 border-b-purple-600 rounded-lg m-3">
            <Link className="inline-block" to={`${dataType}s/${props.id}`}>
              <img
                className="block border border-transparent rounded-lg"
                src={charData.image}
                alt=""
              />
            </Link>
            <div
              className="truncate absolute bottom-0 h-20 left-0 pt-6 w-full text-center 
            bg-gradient-to-t from-purple-100  via-purple-50 via-42% "
            >
              <Link
                className="mt-2 mx-4 whitespace-nowrap font-mono text-lg hover:italic 
                font-extrabold text-purple-600"
                to={`${dataType}s/${props.id}`}
              >
                {charData.name}
              </Link>
              <div className="flex justify-around ">
                <span className="w-20 max-w-full truncate whitespace-nowrap text-sm font-bold text-gray-600">
                  {charData.species + " "}
                </span>
                <span className="w-20	max-w-full truncate whitespace-nowrap text-sm font-bold text-gray-600">
                  {charData.gender + " "}
                </span>
                <span
                  className={`w-20 max-w-full truncate whitespace-nowrap	${
                    charData.status == "Alive"
                      ? "text-green-600"
                      : charData.status == "Dead"
                      ? "text-rose-600"
                      : "text-gray-600"
                  } text-sm font-bold`}
                >
                  {" " + charData.status}
                </span>
              </div>
            </div>
          </div> //characterCards endpoint ********************************
        ) : dataType == "episode" ? (
          //episodesCards ********************************
          <div className="characters relative border-2 border-indigo-50 border-b-4 border-b-purple-600 rounded-lg m-3">
            <div
              className="truncate bottom-0 h-20 left-0 pt-6 w-full text-center 
            bg-gradient-to-t from-purple-100  via-purple-50 via-42% "
            >
              <Link
                className="mt-2 mx-4  font-mono text-lg hover:italic 
                font-extrabold text-purple-600"
                to={`${dataType}s/${props.id}`}
              >
                {charData.name}
              </Link>
            </div>
            <div className="flex justify-around ">
              <span className="w-36 text-center max-w-full truncate whitespace-nowrap text-sm font-bold text-gray-600">
                {charData.air_date + " "}
              </span>
              <span className="w-16 text-center max-w-full truncate whitespace-nowrap text-sm font-bold text-gray-600">
                {charData.episode + " "}
              </span>
            </div>
          </div> //episodesCards endpoint ********************************
        ) : (
          //locationsCards ********************************
          <div className="characters relative border-2 border-indigo-50 border-b-4 border-b-purple-600 rounded-lg m-3">
            <div
              className=" bottom-0 h-20 left-0 pt-6 w-full text-center 
            bg-gradient-to-t from-purple-100  via-purple-50 via-42% "
            >
              <Link
                className="mt-2 mx-4  font-mono text-lg hover:italic 
                font-extrabold text-purple-600"
                to={`${dataType}s/${props.id}`}
              >
                {charData.name}
              </Link>
            </div>
            <div className="flex justify-around ">
              <span className="w-40 px-2 text-center max-w-full truncate whitespace-nowrap text-sm font-bold text-gray-600">
                {charData.dimension + " "}
              </span>
              <span className="w-20 text-center	max-w-full truncate whitespace-nowrap text-sm font-bold text-gray-600">
                {charData.type + " "}
              </span>
            </div>
          </div>
          //locationsCards endpoint ********************************
        )}
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
}

export default Card;
