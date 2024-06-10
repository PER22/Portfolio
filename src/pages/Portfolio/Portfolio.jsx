import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './Portfolio.css';
import Home from '../Home/Home';
import About from '../About/About';
import NavBar from '../../components/Navigation/NavBar';
import CopyrightNotice from '../../components/CopyrightNotice/CopyrightNotice';
import Projects from '../Projects/Projects';

function Portfolio() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      navigate(redirect);
    }
  }, [navigate]);

  return (
    <>
      <div className="content-container">
        <NavBar />
        <main>
          <Routes>
            <Route path='/Portfolio' element={<Home />} />
            <Route path='/Portfolio/about' element={<About />} />
            <Route path='/Portfolio/projects' element={<Projects />} />
          </Routes>
        </main>
        <CopyrightNotice />
      </div>
    </>
  );
}

export default Portfolio;
