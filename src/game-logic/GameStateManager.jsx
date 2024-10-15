


// const CELL_STATE = null;


export function initialGameState() {
  let board = Array(8).fill(null).map(() => Array(8).fill(null));
  board[3][3] = "black";
  board[3][4] = "white";
  board[4][3] = "white";
  board[4][4] = "black";

  return {
    chosenWord: '',
    rows: board,
    gameOver: false,
  }
}