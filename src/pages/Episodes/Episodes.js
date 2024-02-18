import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import BigCard from "../../components/BigCard/BigCard.js";

import axios from "axios";

import Card from "../../components/BigCard/Card/Card";

function Episodes() {
  let { episodeid } = useParams();

  const [episodes, setEpisodes] = useState([]);
  const [pageEp, setPageEp] = useState([1, 0]);

  const [data, setData] = useState([]);
  const [charids, setCharids] = useState([]);
  const [charDatas, setCharDatas] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetAllEpisodes();
  }, [pageEp[0]]);

  useEffect(() => {
    if (episodeid != undefined) {
      handleGetEpisode();
    }
  }, [episodeid]);

  useEffect(() => {
    if (charids.length > 0) {
      handleGetCharacters();
    }
  }, [charids]);

  const handleGetAllEpisodes = () => {
    setLoading(true);
    try {
      axios(`${process.env.REACT_APP_ENDPOINT}episode/?page=${pageEp[0]}`).then(
        function (response) {
          setEpisodes(response.data.results);
          setPageEp([pageEp[0], response.data.info.pages]);
          setLoading(false);
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleGetEpisode = () => {
    setLoading(true);
    try {
      axios(`${process.env.REACT_APP_ENDPOINT}episode/${episodeid}`).then(
        function (response) {
          setData(response.data);
          setCharids(response.data.characters.map((url) => url.split("/")[5]));
          setLoading(false);
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleGetCharacters = async (charid) => {
    setLoading(true);

    try {
      await axios(
        `${process.env.REACT_APP_ENDPOINT}character/${charids.join(",")}`
      ).then(function (response) {
        if (charids.length > 0) {
          if (charids.length === 1) {
            setCharDatas([response.data]);
          } else setCharDatas(response.data);
          setLoading(false);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {episodeid == undefined && !loading ? (
        <BigCard
          page={pageEp}
          setPage={setPageEp}
          data={episodes}
          type={"episode"}
        />
      ) : (
        !loading &&
        charDatas.length > 0 &&
        charDatas[0].id && (
          //single episode ********************************
          <div className="characters relative border-2 border-indigo-50 border-b-4 border-b-purple-600 rounded-lg m-3">
            <BigCard data={charDatas} type={"episodeChar"} />
          </div> //single episode endpoint ********************************
        )
      )}
    </div>
  );
}

export default Episodes;
