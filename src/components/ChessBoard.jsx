import { useEffect, useState } from "react";
import Cell from "./Cell";
import "./ChessBoard.css";

export default function ChessBoard(props) {
  const [chessBoard, setChessBoard] = useState([]);
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const board = props.game.chess;
  // const [isSelected, setIsSelected] = useState(false)
  // const [clicks, setClicks] = useState([]);

  useEffect(() => {
    setChessBoard(board.board().reverse());
  }, [board]);

  // function moveOnClick(e) {
  //   let img
  //   let tried = ''
  //   const position = e.target.dataset.currposition;
  //   if (!tried && !isSelected) {
  //     // setClicks([...clicks, position]);
  //     tried = position
  //     setIsSelected(true)
  //     e.target.className = e.target.className + " focus";
  //     img = document.getElementById(tried);
  //     const piece = img.dataset;
  //     if (props.game.isValidMove(tried, e.target.id, piece.piece)) {
  //       board.move({ from: clicks[0], to: clicks[1] });
  //       e.currentTarget.appendChild(img);
  //       img.dataset.currposition = e.target.id;
  //     }
  //   }
  //   setClicks([]);
  // }

  const drop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("image/png");
    const img = document.getElementById(id);
    const piece = img.dataset.piece;
    let currPosition = img.dataset.currposition;
    if (
      props.game.isValidMove(currPosition, e.currentTarget.id.split("-")[1], piece)
      ) {
        const move = board.move({ from: currPosition, to: e.currentTarget.id.split("-")[1] });
        e.currentTarget.appendChild(img);
        img.dataset.currposition = e.currentTarget.id.split("-")[1];
        props.handleClick(move)
    }
  };

  return (
    <div className="chess-container">
      {chessBoard.map((row, rowIdx) =>
        row.map((cell, idx) => (
          <Cell
            position={`cell-${letters[idx]}${rowIdx + 1}`}
            key={`cell-${rowIdx + 1}${letters[idx]}`}
            idx={idx}
            rowIdx={rowIdx}
            piece={cell ? cell.color + cell.type.toUpperCase() : null}
            drop={drop}
          />
        ))
      )}
    </div>
  );
}
