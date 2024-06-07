import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './Portfolio.css'
import Home from '../Home/Home'
import About from '../About/About'
import NavBar from '../../components/Navigation/NavBar'
import CopyrightNotice from '../../components/CopyrightNotice/CopyrightNotice'

function Portfolio() {

  return (
    <>
      <div className="content-container">
        <NavBar />
        <main>
          <Routes>
            <Route path='/Portfolio' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/projects' element={<Home />} /> */}
          </Routes>
        </main>

        <CopyrightNotice />
      </div>


    </>
  )
}

export default Portfolio;
