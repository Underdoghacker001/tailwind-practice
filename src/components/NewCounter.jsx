import React, { useEffect, useState } from 'react'

export default function NewCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timerId = setInterval(() => {
            console.log("hii new");
          }, 1000)

          return () => {
            clearInterval(timerId)
          }
    }, [])

  return (
    <div className='flex gap-4'>
        <button className='bg-blue-400 px-4 py-1 rounded mt-6' onClick={() => setCount(count - 1)}>Decrement</button>
        <h1 className='px-4 py-1 rounded mt-6 font-bold'>{count}</h1>
        <button className='bg-blue-400 px-4 py-1 rounded mt-6' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
