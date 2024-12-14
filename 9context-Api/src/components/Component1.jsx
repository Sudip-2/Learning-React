import React,{useContext} from 'react'
import counterContext from '../context/context'

const Component1 = () => {
    let counter = useContext(counterContext)
  return (
    <div>Component1 : {counter.count}</div>
  )
}

export default Component1