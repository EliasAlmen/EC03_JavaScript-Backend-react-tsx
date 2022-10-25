import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductFeaturedCardComponent = ({item}) => {
  return (
    <div className="card-product">
        <div className="img-container">
            <div className="quick-menu">
                <button className="nav-icon"><i className="fa-regular fa-magnifying-glass"></i></button>
                <button className="nav-icon"><i className="fa-regular fa-code-compare"></i></button>
                <button className="nav-icon"><i className="fa-regular fa-bag-shopping"></i></button>
            </div>
            <div className="quick-view">
                <NavLink to='/products' className="button btn-hover bg-red">QUICK VIEW</NavLink>
            </div>
            {/* <!-- IMAGE GOES HERE --> */}
        </div>
        <div className="text">
            <h5>{item.category}</h5>
            <h6>Modern Black Blouse</h6>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <p>{item.price}</p>
        </div>
    </div>
  )
}

export default ProductFeaturedCardComponent