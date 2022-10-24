import React from 'react'
import { NavLink } from 'react-router-dom'

const NavIconComponent = ({link, icon, quantity, hideOnMobile}) => {
  return (
    <NavLink className={`nav-icon ${hideOnMobile ? "hidden" : ""} `} to={link} end>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
        <i className={icon}></i>
    </NavLink>
  )
}

export default NavIconComponent