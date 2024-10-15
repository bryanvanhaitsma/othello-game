import React from 'react';



function GameBoard({ rows }) {
  return (
    <div className="container mt-3">
      {rows.map((row, index) => (
        <div className="row">
          {row.map((cell, index) => (
            <div className="col-1">
              {cell !== null ? <p>{cell}</p> : <p>- </p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default GameBoard