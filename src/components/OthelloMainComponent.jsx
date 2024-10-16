import React, { useState } from 'react';

import GameBoard from './GameBoard';
import { initialGameState } from '../game-logic/GameStateManager';

function OthelloMainComponent() {
  const [gameState, setGameState ] = useState(initialGameState);

  function cellClickHandler(rowIndex, cellIndex) {
    if (gameState.board[rowIndex][cellIndex] === null) {
      setGameState((curGameState) => {
  
        let newBoard = [
          ...curGameState.board,
        ]
        newBoard[rowIndex][cellIndex] = curGameState.nextTurn;
        const newNextTurn = curGameState.nextTurn === "black" ? "white" : "black"
  
        return {
          ...curGameState,
          board: newBoard,
          nextTurn: newNextTurn,
        }
      });
    } else {
      console.log("cell already has a token");
    }
  }


  return (
    <>
      <p>Othello Main Component</p>
      <GameBoard board={gameState.board} cellClickHandler={cellClickHandler} />
    </>
  )
}

export default OthelloMainComponent;