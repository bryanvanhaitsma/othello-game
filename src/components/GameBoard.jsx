import React from 'react';



function GameBoard({ board, cellClickHandler }) {



  return (
    <div className="container">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div
              onClick={() => cellClickHandler(rowIndex, cellIndex)} 
              key={cellIndex} 
              className="col p-0 board-cell d-flex align-items-center justify-content-center"
            >
              {cell !== null && <div className={`circle ${cell}`}></div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default GameBoard