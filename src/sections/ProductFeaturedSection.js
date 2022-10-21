import React from 'react'
import { NavLink } from 'react-router-dom'
import star from '../assets/img/icons/icon_star.svg'
import NavIconComponent from '../components/NavIconComponent'

const ProductFeaturedSection = () => {
  return (
    <section className="container ">
        <h3 id="featured">Featured Product</h3>
        <div className="featured">
            <div className="container-cards">
                <div className="card-product">
                    <div className="img-container">
                        <div className="quick-menu">
                            <NavIconComponent link="/search" icon="fa-regular fa-magnifying-glass" />
                            <NavIconComponent link="/compare" icon="fa-regular fa-code-compare" />
                            <NavIconComponent link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
                        </div>
                        <div className="quick-view">
                            <NavLink to='/products' className="button btn-hover bg-red">QUICK VIEW</NavLink>
                        </div>
                        {/* <!-- IMAGE GOES HERE --> */}
                    </div>
                    <div className="text">
                        <h5>Cateogory</h5>
                        <h6>Modern Black Blouse</h6>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <p>$35.00</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductFeaturedSection