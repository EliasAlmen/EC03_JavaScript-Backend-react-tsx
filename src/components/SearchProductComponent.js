import React from 'react'
import { currencyFormatter } from '../utils/currencyFormatter'

const SearchProductComponent = ({ item }) => {
    return (
        <div className="container">
            <div className="searchProductContainer">
                <div className="image">
                    <img src={item.imageName} alt={item.name} />
                </div>
                <div className="data">
                    <span className="product-name">
                        {item.name}
                    </span>
                    <span className="product-category">
                        {item.category}
                    </span>
                    <span className="product-price">
                        {currencyFormatter(item.price)}
                    </span>
                    <span className="product-rating">
                        {Array(item.rating).fill(0).map((_, i) => <i key={i} className="fa-sharp fa-solid fa-star"></i>)}
                    </span>
                    <span className="product-artnum">
                        {item.articleNumber}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchProductComponent