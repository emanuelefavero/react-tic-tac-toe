import { useState } from 'react'
import Square from './Square'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState('X')

  const handleClick = (value: string | null, index: number) => {
    if (value) return // if the square is already filled, return early

    const nextSquares = [...squares]
    nextSquares[index] = turn
    setSquares(nextSquares)

    setTurn(turn === 'X' ? 'O' : 'X')
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
