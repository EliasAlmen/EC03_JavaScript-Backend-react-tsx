import React from 'react'
import toppick from '../assets/img/image_top-pick.svg'
import conscious from '../assets/img/image_conscious.svg'


const Banner2Section = () => {
  return (
    <section className="container banner-even">
        <div className="left">
            <img className="img-fluid" src={toppick} alt="top picks" />
            <div className="text-button-left">
                <h1>Pamela Reif's <br /> Top Picks</h1>
                <button className="button bg-dark">SHOP NOW</button>
            </div>
        </div>
        <div className="right">
            <div className="text-button-right">
                <h1>Let's Be <br /> Conscious</h1>
                <button className="button button-white bg-light">FLASH SALE</button>
            </div>
            <img className="img-fluid" src={conscious} alt="top picks" />
        </div>
    </section>
  )
}

export default Banner2Section