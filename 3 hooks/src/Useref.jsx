import React, { useState } from 'react'

const Useref = () => {

    const [name,setName] = useState('')
  return (
    <>
    <input type="text" onChange={(e) => setName(e.target.value)}/>
    <div>Hello {name}</div>
    </>
  )
}

export default Useref