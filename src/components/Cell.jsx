import "./Cell.css";
import Piece from "./Piece";

export default function Cell(props) {
  function setClassName(idx, rowIdx) {
    if ((idx + 1 * rowIdx + 1) % 2 === 0) return "even";
    return "odd";
  }

  return (
    <div
      id={props.position}
      position={props.position}
      className={`Cell ${setClassName(props.idx, props.rowIdx)}`}
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      }}
      onDrop={props.drop}
      onClick={e => props.makeClickMove(e, props.position.split("-")[1])}
    >
      <Piece piece={props.piece} position={props.position.split("-")[1]}/>
    </div>
  );
}
