import React from 'react'
import NavIconComponent from '../components/NavIconComponent'
import star from '../assets/img/icons/icon_star.svg'

const ProductRankingSection = () => {
  return (
    <section className="container-products-category-ranking">
        <div className="container">
            <div className="latest">
                <h1>Latest Product</h1>
                <div className="card-product">
                    <div className="img-container">
                        <div className="quick-menu">
                            <NavIconComponent link="/search" icon="fa-regular fa-magnifying-glass" />
                            <NavIconComponent link="/compare" icon="fa-regular fa-code-compare" />
                            <NavIconComponent link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
                        </div>
                        <div className="quick-view">
                            <button className="button btn-hover bg-red">QUICK VIEW</button>
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
            <div className="best">
                <h1>Best Selling Product</h1>
                <div className="card-product">
                    <div className="img-container">
                        <div className="quick-menu">
                            <NavIconComponent link="/search" icon="fa-regular fa-magnifying-glass" />
                            <NavIconComponent link="/compare" icon="fa-regular fa-code-compare" />
                            <NavIconComponent link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
                        </div>
                        <div className="quick-view">
                            <button className="button btn-hover bg-red">QUICK VIEW</button>
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
            <div className="reacted">
                <h1>Top Reacted Product</h1>
                <div className="card-product">
                    <div className="img-container">
                        <div className="quick-menu">
                            <NavIconComponent link="/search" icon="fa-regular fa-magnifying-glass" />
                            <NavIconComponent link="/compare" icon="fa-regular fa-code-compare" />
                            <NavIconComponent link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
                        </div>
                        <div className="quick-view">
                            <button className="button btn-hover bg-red">QUICK VIEW</button>
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
        <div className="_border-bottom">
            <div className="_border"></div>
        </div>
    </section>
  )
}

export default ProductRankingSection