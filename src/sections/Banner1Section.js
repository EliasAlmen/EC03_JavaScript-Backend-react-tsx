import React from 'react'
import { NavLink } from 'react-router-dom'
import clearance from '../assets/img/image_clearance.svg'
import arrivals from '../assets/img/image_new-arrival.svg'

const Banner1Section = () => {
  return (
    <section className="container">
        <div className="banner">
            <article className="banner-big">
                <div className="clearance d-none d-lg-block">
                    <h2>
                        Winter Clearance <br /> Up to 70% Off!
                    </h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                    <NavLink to={`/products`} className="button bg-dark">SHOP NOW</NavLink>
                </div>
                <img className="img d-none d-lg-block" src={clearance} alt="Clearance" />
            </article>
            <article className="banner-small">
                <div className="arrivals">
                    <h2>
                        New <br />arrivals
                    </h2>
                    <button to={`/products`} className="button bg-dark">SHOW NOW</button>
                </div>
                <img className="img-fluid" src={arrivals} alt="New arrivals" />
            </article>
        </div>
    </section>
  )
}

export default Banner1Section