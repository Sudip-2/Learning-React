import React from 'react'
import Component1 from './Component1'
import counterContext from '../context/context'
import { useContext } from 'react'

const Button = () => {
    let counter = useContext(counterContext)
  return (
    <>
    <button 
    onClick={() => counter.setCount((count) => count + 1)}
    ><span><Component1/></span>Click</button>
    </>
  )
}

export default Button