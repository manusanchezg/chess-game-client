import React from "react";

export default function Piece(props) {
  return (
    <React.Fragment>
      {props.piece ? (
        <img
          src={`../../assets/${props.piece}.png`}
          alt={props.piece}
          className="piece-image"
          id={`${props.position}`}
          onDragStart={(e) => {
            e.dataTransfer.setData("image/png", e.target.id);
          }}
          data-piece={props.piece.split(".")[0]}
          data-currposition={props.position}
        />
      ) : null}
    </React.Fragment>
  );
}
