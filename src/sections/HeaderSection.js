import React from 'react'
import NavIconComponent from '../components/NavIconComponent'
import fixxo from '../assets/img/logo/logo_Fixxo.svg'
import { NavLink } from 'react-router-dom'
import NavTextLinkComponent from '../components/NavTextLinkComponent'

const HeaderSection = () => {
  return (
    <header className="container">
        <div className="header">
            <NavLink className="logo" to="/"><img src={fixxo} alt="Brand logotype" /></NavLink>
            <nav className="nav-text">
              <NavTextLinkComponent adress="" name="Home" />
              <NavTextLinkComponent adress="categories" name="Categories" />
              <NavTextLinkComponent adress="products" name="Products" />
              <NavTextLinkComponent adress="contacts" name="Contacts" />
            </nav>
            <nav className="nav-icons">
              <NavIconComponent hideOnMobile={true} link="/search" icon="fa-regular fa-magnifying-glass" />
              <NavIconComponent hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" />
              <NavIconComponent link="/wishlist" icon="fa-regular fa-heart" quantity="3" />
              <NavIconComponent link="/shoppingcart" icon="fa-regular fa-bag-shopping" quantity="4" />
            </nav>
        </div>
    </header>
  )
}

export default HeaderSection