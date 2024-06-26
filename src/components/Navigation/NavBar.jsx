import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
    return (<>
        <nav aria-label="Main navigation" className="nav-container">
            <NavLink className="nav-link" end to="/Portfolio/">Skills</NavLink>
            <NavLink className="nav-link" to="/Portfolio/about">About</NavLink>
            <NavLink className="nav-link" to="/Portfolio/projects">Projects</NavLink>
        </nav>
    </>);
}