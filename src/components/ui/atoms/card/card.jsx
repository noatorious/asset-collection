import React from "react";

import "./card.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      className="card-item"
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set4`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
