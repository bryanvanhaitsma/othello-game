


const CELL_STATE = {
  default: {
    color: 'green',
  },
  white: {
    color: 'white',
  },
  black: {
    color: 'black',
  },
}


export function initialGameState() {
  return {
    chosenWord: '',
    rows: Array(8).fill(Array(8).fill(CELL_STATE.default)),
    gameOver: false,
  }
}