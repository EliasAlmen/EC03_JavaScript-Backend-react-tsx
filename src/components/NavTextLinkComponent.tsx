import React from 'react'
import { NavLink } from 'react-router-dom'


interface Props {
  adress: string
  name: string
}


const NavTextLinkComponent: React.FC<Props>  = ({adress, name}) => {
  return (
    <NavLink className="text-link" to={"/" + adress} end>{name}</NavLink>
  )
}

export default NavTextLinkComponent