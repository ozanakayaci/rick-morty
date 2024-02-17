import { useEffect, useState } from "react";
import BigCard from "../../components/BigCard/BigCard";
import { useSelector } from "react-redux";

import axios from "axios";

function Favotites() {
  const favorites = useSelector((state) => state.favorites.characterIDs);
  const [data, setData] = useState([]);



  useEffect(() => {
    console.log(favorites)
    try
    {
      axios(
        `${process.env.REACT_APP_ENDPOINT}character/${favorites.join(",")}`
      ).then(function (response) {
        setData(response.data);
        console.log(response)
      });
    }
    catch (e) {
      console.log(e);
    }



  }, [favorites]);

  return (
    <div>
      <BigCard data={data} type={"favorite"}></BigCard>
    </div>
  );
}

export default Favotites;
