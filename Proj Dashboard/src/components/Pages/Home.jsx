import React from 'react'
import { NavLink } from "react-router";

const Home = () => {
  return (
    <>
    <div className='text-3xl text-center'>Home</div>
    <NavLink to={"/profile"} className='text-center block'>Profile</NavLink>
    <NavLink to={"/admin"} className='text-center block'>Dashboard</NavLink>
    </>
  )
}

export default Home