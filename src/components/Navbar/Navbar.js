import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/characters">Character</Link>
      <Link to="/episodes">Episodes</Link>
      <Link to="/locations">Locations</Link>
    </div>
  );
}

export default Navbar;
