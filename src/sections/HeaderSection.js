import React, { useState } from 'react'
import NavIconComponent from '../components/NavIconComponent'
import fixxo from '../assets/img/logo/logo_Fixxo.svg'
import { NavLink } from 'react-router-dom'
import NavTextLinkComponent from '../components/NavTextLinkComponent'

const HeaderSection = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className="container">
        <div className="header">
            <NavLink className="logo" to="/"><img src={fixxo} alt="Brand logotype" /></NavLink>
            <nav className={`nav-text ${showMenu ? "d-grid" : "d-none"}`}>
              <NavTextLinkComponent adress="" name="Home" />
              <NavTextLinkComponent adress="categories" name="Categories" />
              <NavTextLinkComponent adress="products" name="Products" />
              <NavTextLinkComponent adress="contacts" name="Contacts" />
            </nav>
            <nav className="nav-icons">
              <NavIconComponent link="/search" icon="fa-regular fa-magnifying-glass" />
              <NavIconComponent hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" />
              <NavIconComponent hideOnMobile={true} link="/wishlist" icon="fa-regular fa-heart" quantity="3" />
              <NavIconComponent link="/shoppingcart" icon="fa-regular fa-bag-shopping" quantity="4" />
              <button onClick={toggleMenu} className="nav-icon nav-icon-menu"><i className="fa-regular fa-bars"></i></button>
            </nav>
        </div>
    </header>
  )
}

export default HeaderSection