import React, { useState } from 'react'
import Board from './components/Board.jsx'

function App() {
  const [xIsNext, setXisNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentmove, setCurrentmove] = useState(0)
  const currentSquares = history[currentmove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentmove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentmove(nextHistory.length - 1);
    setXisNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentmove(nextMove);
    setXisNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button className='bg-gray-300 px-2 rounded mb-2' onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className='bg-gray-900 flex justify-center h-svh items-center flex-col lg:flex-row'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <ol className='grid grid-cols-2 gap-2 sm:grid-cols-3 mt-3'>
          {moves}
        </ol>
      </div>
    </>
  )
}

export default App