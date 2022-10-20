import React from 'react'
import NavIconComponent from '../components/NavIconComponent'
import star from '../assets/img/icons/icon_star.svg'

const ProductRankingSection = () => {
  return (
    <section class="container">
        <div class="container-products-category-ranking">
            <div class="latest">
                <h1>Latest Product</h1>
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
            <div class="best">
                <h1>Best Selling Product</h1>
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
            <div class="reacted">
                <h1>Top Reacted Product</h1>
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
        <div className="border-bottom border-2"></div>
    </section>
  )
}

export default ProductRankingSection