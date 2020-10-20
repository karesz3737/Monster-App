import React from "react";
import "./cards-style.css";

export const Card = (props) => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.el.id}?set=set6`} />
    <h2>{props.el.name}</h2>
    <h2>{props.el.email}</h2>
  </div>
);
