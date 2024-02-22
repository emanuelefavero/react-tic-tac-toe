import { useState } from 'react'
import Square from './Square'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (value: string | null, index: number) => {
    if (value) return // if the square is already filled, return early

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
            onSquareClick={() => handleClick(value, index)}
          />
        ))}
      </div>
    </>
  )
}
