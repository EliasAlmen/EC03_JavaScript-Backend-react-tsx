import React from 'react'
import star from '../assets/img/icons/icon_star.svg'
import NavIconComponent from '../components/NavIconComponent'

const ProductFeaturedSection = () => {
  return (
    <section class="container ">
        <h3 id="featured">Featured Product</h3>
        <div class="featured">
            <div class="container-cards">
                <div class="card-product">
                    <div class="img-container">
                        <div class="quick-menu">
                            <NavIconComponent link="/search" icon="fa-regular fa-magnifying-glass" />
                            <NavIconComponent link="/compare" icon="fa-regular fa-code-compare" />
                            <NavIconComponent link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
                        </div>
                        <div class="quick-view">
                            <button class="button btn-hover bg-red">QUICK VIEW</button>
                        </div>
                        {/* <!-- IMAGE GOES HERE --> */}
                    </div>
                    <div class="text">
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