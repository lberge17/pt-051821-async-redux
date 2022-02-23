import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="header">
      <NavLink className='headerlink' to="/people">People</NavLink>
      <NavLink className='headerlink' to="/planets">Planets</NavLink>
      <NavLink className='headerlink' to="/starships">Starships</NavLink>
    </div>
  )
}
