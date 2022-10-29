import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCardComponent = ({product, offPriceOnItem}) => {
  return (
    <div className="card-product">
        <div className="img-container">
            <div className="quick-menu">
                <button className="nav-icon"><i className="fa-regular fa-magnifying-glass"></i></button>
                <button className="nav-icon"><i className="fa-regular fa-code-compare"></i></button>
                <button className="nav-icon"><i className="fa-regular fa-bag-shopping"></i></button>
            </div>
            <div className="quick-view">
                <NavLink to={`/products/${product.id}`} className="button btn-hover bg-red">QUICK VIEW</NavLink>
            </div>
            <img src={product.img} alt={product.productName} />
        </div>
        <div className="text">
            <h5>{product.category}</h5>
            <h6>{product.productName}</h6>
            <span>
                {/* https://stackoverflow.com/questions/50898165/react-render-a-certain-number-of-components-dynamically */}
                {/* {products.rating.map(product => <i key={i} className="fa-sharp fa-solid fa-star"></i>)} */}
                {Array(product.rating).fill(0).map((_, i) => <i key={i} className="fa-sharp fa-solid fa-star"></i>)}
            </span>
            <div className="bothPrices">
                <p className={offPriceOnItem ? "firstPrice" : ""}>{product.price}</p>
                <span className={offPriceOnItem ? "offPrice" : ""}>{`${offPriceOnItem ? product.offPrice : ""}`}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCardComponent