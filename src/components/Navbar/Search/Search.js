import React from "react";

import { useState } from "react";

import { Link } from "react-router-dom";

//css
import "./Search.scss";

function Search() {
  const [filteredWord, setFilteredWord] = useState("rick");

  let handleChange = (e) => {
    setFilteredWord(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        autoComplete="false"
        type="text"
        name="search"
        placeholder="Search..."
        className="search-input"
        onChange={handleChange}
      />
      <Link className="search-btn" to={`/search/${filteredWord}`}>
        <i className="fas fa-search"></i>
      </Link>
    </div>
  );
}

export default Search;
