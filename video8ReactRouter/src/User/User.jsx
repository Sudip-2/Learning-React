import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <>
        <h1 className='bg-orange-500 text-3xl py-5 text-center'>User{userid}</h1>
    </>
  )
}

export default User