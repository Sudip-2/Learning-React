import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(10)
  // let counter = 10
  const addVal = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  const subVal = () => {
   setCounter(counter-1) 
  }
  return (
    <>
      <h1>React course with Sudip{counter}</h1>
      <button onClick={addVal}>Add val</button>
      <button onClick={subVal}>Sub val</button>
      <h3>React course with Sudip{counter}</h3>
    </>
  )
}

export default App
