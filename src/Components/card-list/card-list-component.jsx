import React from "react";
import "./card.list.style.css";
import { Card } from "../cards/cards-component";
function CardComponent(props) {
  return (
    <div className="card-list">
      {props.mon.map((el) => (
        <Card key={el.id} el={el} />
      ))}
    </div>
  );
}

export default CardComponent;
