import React from 'react'
import NavIconComponent from '../components/NavIconComponent'
import fixxo from '../assets/img/logo/logo_Fixxo.svg'

const HeaderSection = () => {
  return (
    <header class="container">
        <div class="header">
            <img src={fixxo} alt="Brand logotype" />
            <nav class="nav-text">
                <a href="index.html">Home</a>
                <a href="#">Categories</a>
                <a href="#">Products</a>
                <a href="contact.html">Contacts</a>
            </nav>
            <nav class="nav-icons">
                <NavIconComponent link="/search" icon="fa-regular fa-magnifying-glass" />
                <NavIconComponent link="/compare" icon="fa-regular fa-repeat" />
                <NavIconComponent link="/wishlist" icon="fa-regular fa-heart" />
                <NavIconComponent link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
            </nav>
        </div>
    </header>
  )
}

export default HeaderSection