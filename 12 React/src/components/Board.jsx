import { useEffect, useState } from 'react'
import Square from './Square.jsx'
function App({squares,xIsNext,onPlay}) {
  const [winner, setWinner] = useState(null)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a]
      }
    }
    return null;
  }

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares)
  }

  useEffect(() => {
    const gameWinner = calculateWinner(squares)
    if (gameWinner) {
      setWinner(gameWinner)
    }
  }
    , [squares])

  return (
    <>
    <div className='flex flex-col items-center'>
        <h2 className='text-white mb-5 sm:mb-14 text-3xl w-[300px] text-center font-semibold sm:w-full'>Welcome to Sudip's Tic Tac Toe Game</h2>
        <div className='grid grid-cols-3'>
          <Square value={squares[0]} handleOnclick={() => handleClick(0)} />
          <Square value={squares[1]} handleOnclick={() => handleClick(1)} />
          <Square value={squares[2]} handleOnclick={() => handleClick(2)} />
          <Square value={squares[3]} handleOnclick={() => handleClick(3)} />
          <Square value={squares[4]} handleOnclick={() => handleClick(4)} />
          <Square value={squares[5]} handleOnclick={() => handleClick(5)} />
          <Square value={squares[6]} handleOnclick={() => handleClick(6)} />
          <Square value={squares[7]} handleOnclick={() => handleClick(7)} />
          <Square value={squares[8]} handleOnclick={() => handleClick(8)} />
        </div>
        <p className='text-white mt-4 text-xl text-center'>Winner is : {winner}</p>
    </div>
    </>
  )
}

export default App