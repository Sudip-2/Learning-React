import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
