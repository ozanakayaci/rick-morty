import React from "react";
import { Link, useParams } from "react-router-dom";

function Character() {
  let { charid } = useParams();
  return <div>{charid}</div>;
}

export default Character;
