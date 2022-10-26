import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductFeaturedCardComponent = ({product, offPriceOnItem}) => {
  return (
    <div className="card-product">
        <div className="img-container">
            <div className="quick-menu">
                <button className="nav-icon"><i className="fa-regular fa-magnifying-glass"></i></button>
                <button className="nav-icon"><i className="fa-regular fa-code-compare"></i></button>
                <button className="nav-icon"><i className="fa-regular fa-bag-shopping"></i></button>
            </div>
            <div className="quick-view">
                <NavLink to={`/products/${product.category}/${product.id}`} className="button btn-hover bg-red">QUICK VIEW</NavLink>
            </div>
            <img src={product.img} alt={product.name} />
        </div>
        <div className="text">
            <h5>{product.category}</h5>
            <h6>{product.productName}</h6>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <div className="d-flex justify-content-center align-items-center">
                <p className={offPriceOnItem ? "firstPrice me-2" : ""}>{product.price}</p>
                <span className={offPriceOnItem ? "offPrice" : ""}>{`${offPriceOnItem ? product.offPrice : ""}`}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductFeaturedCardComponent