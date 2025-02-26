import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <ul>
           
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/form">Form</NavLink>
            </li>
        </ul>
    </div>
  )
}
