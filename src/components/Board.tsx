import { useState } from 'react'
import Square from './Square'

// * COMPONENT
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (index: number) => {
    // if the square is already filled or there's a winner, return (do nothing)
    if (squares[index] || calculateWinner(squares)) return

    // update the square with the current player value
    const nextSquares = [...squares]
    nextSquares[index] = xIsNext ? 'X' : 'O'
    setSquares(nextSquares)

    setXIsNext(!xIsNext) // toggle the next player
  }

  return (
    <>
      <div className='board'>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  )
}

// * HELPER FUNCTIONS
function calculateWinner(squares: string[] | null[]) {
  const lines = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ]

  // check if any of the lines have the same value
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i] // destructure the lines array

    // check if the squares have the same value
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a] // return the value of the winning squares
    }
  }

  return null
}
