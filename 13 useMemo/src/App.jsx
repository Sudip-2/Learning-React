import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useMemon memoizes a value not function which is why its different from useCallback

const nums = new Array(30000000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i == 29000000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumbers] = useState(nums)

  const magical = useMemo(() => number.find((item) => item.isMagical === true), [number])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {magical.index}</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          if (count == 5) {
            setNumbers(new Array(20000000).fill(0).map((_, i) => {
              return {
                index: i,
                isMagical: i == 900000
              }
            }))
          }
        }
        }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
