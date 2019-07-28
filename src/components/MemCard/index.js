import React from "react";
import "./style.css";

function MemCard(props) {
  const { id, name, image, clickHandler } = props;

  return (
    <div
      className="card"
      onClick={() => { clickHandler(id) }}
    >
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
    </div>
  );
}


export default MemCard;
