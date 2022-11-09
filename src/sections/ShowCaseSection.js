import React from 'react'
import { NavLink } from 'react-router-dom'
import showcase1 from '../assets/img/On_chair.png'
import showcase2 from '../assets/img/On_thing.png'
import GradientBackgroundSection from './GradientBackgroundSection'

const ShowCaseSection = () => {
  return (
    <section className="container-fluid showcase">
        <GradientBackgroundSection />

        <img className="img-fluid d-none d-lg-block" src={showcase1} alt="sitting on chair" />
        <div className="sale">
            <h1>SALE UP <br /> To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <NavLink to={`/products`} className="button bg-red">SHOP NOW</NavLink>
        </div>
        <img adress='' className="img-fluid d-none d-xxl-block" src={showcase2} alt="sitting" />
    </section>
  )
}

export default ShowCaseSection