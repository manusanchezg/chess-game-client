import { Chess } from "chess.js";

export default class Game {
  constructor() {
    this.chess = new Chess();
  }

  movePiece(currPos, nextPos, piece) {
    if (this.isValidMove(currPos, nextPos, piece)) this.chess.move(nextPos);
  }

  isValidMove(currPos, nextPos, piece) {
    const moves = this.chess.moves({ square: `${currPos}` });
    const pieceLetter = piece.split("")[1];
    console.log(moves)
    console.log(`${pieceLetter}${nextPos}`)
    if (moves.includes(`${pieceLetter}${nextPos}`) || moves.includes(`${nextPos}`)) {
      return true
    }
    return false
  }
}
