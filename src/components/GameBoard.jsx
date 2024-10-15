import React from 'react';



function GameBoard({ rows }) {
  return (
    <div className="container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="col p-2 board-cell">
              {cell !== null && <div className={`circle ${cell}`}></div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default GameBoard