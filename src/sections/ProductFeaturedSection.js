import React, { useState } from 'react'
import ProductFeaturedCardComponent from '../components/ProductFeaturedCardComponent'

const ProductFeaturedSection = ({title}) => {

    const [products, setProducts] = useState([
        { id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5},
        { id: 2, productName: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5},
        { id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5},
        { id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5},
        { id: 5, productName: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5}
    ])

    return (
        <section className="container "> 
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {products.map(product => <ProductFeaturedCardComponent item={product}/>)}
                </div>
            </div>
        </section>
    )
}

export default ProductFeaturedSection