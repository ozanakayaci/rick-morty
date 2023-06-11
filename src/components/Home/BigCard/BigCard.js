import { React, useState } from "react";
import Card from "./Card/Card.js";

function BigCard(props) {
  return (
    <div>
      {`-----${props.type[0].toUpperCase() + props.type.slice(1)}s`}
      <div
        className={`${
          props.type == "character"
            ? "grid grid-cols-4 gap-3"
            : "grid grid-cols-3 gap-3"
        }`}
      >
        {props.ids.map((id, key) => (
          <Card key={key} id={id} type={props.type} />
        ))}
      </div>
    </div>
  );
}

export default BigCard;
