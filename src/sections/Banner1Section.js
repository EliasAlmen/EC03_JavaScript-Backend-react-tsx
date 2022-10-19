import React from 'react'
import clearance from '../assets/img/image_clearance.svg'
import arrivals from '../assets/img/image_new-arrival.svg'

const Banner1Section = () => {
  return (
    <section class="container">
        <div class="banner">
            <article class="banner-big">
                <div class="clearance">
                    <h2>
                        Winter Clearance <br /> Up to 70% Off!
                    </h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                    <button class="button bg-dark">SHOP NOW</button>
                </div>
                <img class="img" src={clearance} alt="Clearance" />
            </article>
            <article class="banner-small">
                <div class="arrivals">
                    <h2>
                        New <br />arrivals
                    </h2>
                    <button class="button bg-dark">SHOW NOW</button>
                </div>
                <img class="img" src={arrivals} alt="New arrivals" />
            </article>
        </div>
    </section>
  )
}

export default Banner1Section