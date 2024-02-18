import axios from "axios";
import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import BigCard from "../../components/BigCard/BigCard";
import Pagination from "../../components/Pagination/Pagination";
import Character from "../Characters/Characters";

function Search() {
  const { filteredWord } = useParams();

  return (
    <div>
      <Character filteredWord={filteredWord} />
    </div>
  );
}

export default Search;
