import React from 'react'
import { NavLink } from 'react-router-dom'

const NavTextLinkComponent = ({adress, name}) => {
  return (
    <NavLink className="text-link" to={"/" + adress} end>{name}</NavLink>
  )
}

export default NavTextLinkComponent