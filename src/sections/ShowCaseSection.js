import React from 'react'
import showcase1 from '../assets/img/image_showcase_1.svg'
import showcase2 from '../assets/img/image_showcase_2.svg'

const ShowCaseSection = () => {
  return (
    <section className="container-fluid showcase">
        <img className="img-fluid d-none d-lg-block" src={showcase1} alt="sitting on chair" />
        <div className="sale">
            <h1>SALE UP <br /> To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <button className="button bg-red">SHOP NOW</button>
        </div>
        <img className="img-fluid d-none d-xxl-block" src={showcase2} alt="sitting" />
    </section>
  )
}

export default ShowCaseSection