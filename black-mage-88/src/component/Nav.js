import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import './compStyles/Nav.css'

const Nav = () => {
  return (
    <div className="nav-container">
      <NavLink className="home nav" to="/">
        Home
      </NavLink>
      <NavLink className="albums nav" to="/albums">
        Albums
      </NavLink>
      <NavLink className="videos nav" to="/videos">
        Videos
      </NavLink>
      <NavLink className="contacts nav" to="/contacts">
        Contacts
      </NavLink>
      <NavLink className="quote nav" to="/quote">
        <FiHeart />
      </NavLink>
    </div>
  )
}

export default Nav
