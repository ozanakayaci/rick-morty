import { useEffect, useState } from "react";
import BigCard from "../../components/BigCard/BigCard";
import { useSelector } from "react-redux";

import axios from "axios";

function Favotites() {
  const favorites = useSelector((state) => state.favorites.characterIDs);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    //no need to make a request if there are no favorites
    if (favorites.length === 0) return;

    try {
      axios(`${process.env.REACT_APP_ENDPOINT}character/${favorites.join(",")}`)
        .then(function (response) {
          if (favorites.length === 1) {
            setData([response.data]);
          } else setData(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }, [favorites]);

  return (
    <div>
      {data.length > 0 ? (
        <BigCard data={data} type={"favorite"}></BigCard>
      ) : (
        <div className="text-center font-bold text-xl">
          <span>No favorites yet</span>
        </div>
      )}
    </div>
  );
}

export default Favotites;
