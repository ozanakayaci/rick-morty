import { React, useState } from "react";
import Card from "./Card/Card.js";

function BigCard(props) {
  return (
    <div>
      {`-----${props.type[0].toUpperCase() + props.type.slice(1)}s`}
      <div className={`flex justify-center flex-wrap m-3`}>
        {props.ids.map((id, key) => (
          <Card key={key} id={id} type={props.type} />
        ))}
      </div>
    </div>
  );
}

export default BigCard;