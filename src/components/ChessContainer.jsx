import React from "react";
import ChessBoard from "./ChessBoard";
import "./ChessContainer.css"

export default function ChessContainer(){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]

    return (
        <div className="board-container">
            <div className="numbers-container">
                {numbers.map(number => (
                    <div key={`number-${number}`}>{number}</div>
                ))}
            </div>
            <div className="letters-container">
                {letters.map(letter => (
                    <div key={`letter-${letter}`}>{letter}</div>
                ))}
            </div>
            <ChessBoard />
        </div>
    )
}