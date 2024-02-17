import React from "react";

import { Link, useParams } from "react-router-dom";

function Episodes() {
  let { episodeid } = useParams();
  return <div>{episodeid}</div>;
}

export default Episodes;
