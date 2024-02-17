import React from "react";

import { Link, useParams } from "react-router-dom";

function Locations() {
  let { locationid } = useParams();
  return <div>{locationid} </div>;
}

export default Locations;
