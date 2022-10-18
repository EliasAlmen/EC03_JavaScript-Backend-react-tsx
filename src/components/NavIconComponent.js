import React from 'react'
import { NavLink } from 'react-router-dom'

const NavIconComponent = ({link, icon}) => {
  return (
    <NavLink className='nav-icon' to={link}>
        <i className={icon}></i>
    </NavLink>
  )
}

export default NavIconComponent