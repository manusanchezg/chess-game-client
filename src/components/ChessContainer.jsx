import React, { useEffect, useState } from "react";
import ChessBoard from "./ChessBoard";
import "./ChessContainer.css";
import Timer from "./Timer";
import Game from "./Game";

export default function ChessContainer(props) {
  const [whiteCounterIsActive, setWhiteCounter] = useState(false);
  const [blackCounterIsActive, setBlackCounter] = useState(false);
  const [whiteRemainingTime, setWhiteRemainingTime] = useState(props.time);
  const [blackRemainingTime, setBlackRemainingTime] = useState(props.time);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const timers = (
    <div className="timer-container">
      <Timer time={props.time} id="white" remainingTime={whiteRemainingTime} />
      <Timer time={props.time} id="black" remainingTime={blackRemainingTime} />
    </div>
  );

  const game = new Game();

  function handleClick() {
    console.log(game.chess.board())
    console.log(game.chess.turn())
    if (game.chess.turn() === "w") {
      setWhiteCounter(!whiteCounterIsActive);
    } else if (game.chess.turn() === "b") {
      setBlackCounter(!blackCounterIsActive);
    }
  }

  useEffect(() => {
    let interval;
    if (whiteCounterIsActive) {
      interval = setInterval(() => {
        setWhiteRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [whiteCounterIsActive]);

  useEffect(()=>{
    let interval;
    if (blackCounterIsActive) {
      interval = setInterval(() => {
        setBlackRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [blackCounterIsActive])

  return (
    <div className="main-container">
      <div className="board-container">
        <div className="numbers-container">
          {numbers.map((number) => (
            <div key={`number-${number}`}>{number}</div>
          ))}
        </div>
        <div className="letters-container">
          {letters.map((letter) => (
            <div key={`letter-${letter}`}>{letter}</div>
          ))}
        </div>
        <ChessBoard game={game} handleClick={handleClick} />
      </div>
      {props.time ? timers : null}
    </div>
  );
}
