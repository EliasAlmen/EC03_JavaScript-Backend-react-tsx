import React from 'react'
import toppick from '../assets/img/image_top-pick.svg'
import conscious from '../assets/img/image_conscious.svg'
import { NavLink } from 'react-router-dom'


const Banner2Section: React.FC = () => {
  return (
    <section className="container">
        <div className="banner-even">
            <div className="left">
                <img className="img-fluid" src={toppick} alt="top picks" />
                <div className="text-button-left">
                    <h1>Pamela Reif's <br /> Top Picks</h1>
                    <NavLink to={`/products`} className="button bg-dark">SHOP NOW</NavLink >
                </div>
            </div>
            <div className="right">
                <div className="text-button-right">
                    <h1>Let's Be <br /> Conscious</h1>
                    <NavLink to={`/products`} className="button button-white bg-light">FLASH SALE</NavLink>
                </div>
                <img className="img-fluid" src={conscious} alt="top picks" />
            </div>
        </div>
    </section>
  )
}

export default Banner2Section