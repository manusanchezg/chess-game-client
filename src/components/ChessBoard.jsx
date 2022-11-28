import { useEffect, useRef, useState } from "react";
import Cell from "./Cell";
import "./ChessBoard.css";
import Game from "./Game";

export default function ChessBoard(props) {
  const [chessBoard, setChessBoard] = useState([]);
  const [clickedPosition, setClickedPosition] = useState([]);
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const game = new Game();
  const board = game.chess;

  useEffect(() => {
    setChessBoard(board.board().reverse());
  }, [clickedPosition]);

  function makeClickMove(e, firstClick, secondClick) {
    // console.log(board.moves({ square: firstClick }));
    if (clickedPosition.length <= 1) {
      e.target.className += " focus";
        setClickedPosition([firstClick]);
    }
    // console.log(clickedPosition.length)
  }

  const drop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("image/png");
    const img = document.getElementById(id);
    const piece = img.dataset.piece;
    let currPosition = img.dataset.currposition;
    // console.log(board.turn());
    if (
      game.isValidMove(currPosition, e.currentTarget.id.split("-")[1], piece)
    ) {
      // console.log("valid move");
      board.move(e.currentTarget.id.split("-")[1]);
      e.currentTarget.appendChild(img);
      img.dataset.currposition = e.currentTarget.id.split("-")[1];
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
            makeClickMove={makeClickMove}
          />
        ))
      )}
    </div>
  );
}
