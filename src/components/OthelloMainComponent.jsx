import React, { useState } from 'react';

import GameBoard from './GameBoard';
import { initialGameState } from '../game-logic/GameStateManager';

function OthelloMainComponent() {
  const [gameState, setGameState ] = useState(initialGameState);
  return (
    <>
      <p>Othello Main Component</p>
      <GameBoard rows={gameState.rows} />
    </>
  )
}

export default OthelloMainComponent;