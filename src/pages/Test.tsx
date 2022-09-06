import { ReactElement, useState } from 'react'

const Counter = (): ReactElement => {
  const [counter, setCounter] = useState(0)

  const incrementCounter = (): void => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  const decrementCounter = (): void => {
    setCounter((prevCounter) => prevCounter - 1)
  }

  return (
    <>
      <button data-testid="increment" onClick={incrementCounter}>
        +
      </button>
      <p data-testid="counter">{counter}</p>
      <button disabled data-testid="decrement" onClick={decrementCounter}>
        -
      </button>
    </>
  )
}

export default Counter
