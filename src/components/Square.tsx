import { useState } from 'react'

export default function Square() {
  const [value, setValue] = useState('')

  const handleClick = () => {
    setValue('X')
  }

  return (
    <>
      <button className='square' onClick={handleClick}>
        {value}
      </button>
    </>
  )
}
