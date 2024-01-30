import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  if (count < 0) {setCount(0)}

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>- </button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

