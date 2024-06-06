import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './Portfolio.css'
import Home from '../Home/Home'

function Portfolio() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<Home />} /> */}
        {/* <Route path='/projects' element={<Home />} /> */}
      </Routes>


    </>
  )
}

export default Portfolio;
