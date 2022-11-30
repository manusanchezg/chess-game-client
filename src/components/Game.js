import { Chess } from "chess.js";

export default class Game {
  constructor() {
    this.chess = new Chess();
  }

  isValidMove(currPos, nextPos, piece) {
    const moves = this.chess.moves({ square: `${currPos}` });
    console.log(moves);
    const pieceLetter = piece.split("")[1];
    if (
      moves.includes(`${pieceLetter}${nextPos}`) ||
      moves.includes(`${nextPos}`) 
    ) {
      return true;
    }
    return false;
  }

  #isEating(moves, position) {
    const isEating = moves.filter((move) => move.includes("x"))
    if (isEating) {
      this.chess.remove(position);
      return true;
    }
    return false;
  }
}
