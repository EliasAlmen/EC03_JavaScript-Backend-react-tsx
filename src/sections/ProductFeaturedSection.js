import React, { useState } from 'react'
import ProductFeaturedCardComponent from '../components/ProductFeaturedCardComponent'

const ProductFeaturedSection = ({title}) => {

    const [products, setProducts] = useState([
        { id: 1, offPriceOnItemValue: false, price: "$35.00", productName: "Modern Black Blouse", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
        { id: 2, offPriceOnItemValue: true, offPrice: "$150.00", price: "$250.00", productName: "Blue silk flare sleeved top", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
        { id: 3, offPriceOnItemValue: false, price: "$500.00", productName: "New look men's coat", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
        { id: 4, offPriceOnItemValue: false, price: "$5.00", productName: "Circle pattern girls shirt", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
        { id: 5, offPriceOnItemValue: true, offPrice: "$10.00", price: "$20.00", productName: "New look men's sneakers", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
        { id: 6, offPriceOnItemValue: false, price: "$3500.00", productName: "Red women's blazer full", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
        { id: 7, offPriceOnItemValue: false, price: "$350.00", productName: "Men's denim shirts full", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
        { id: 8, offPriceOnItemValue: false, price: "$50.00", productName: "Women's leather bag", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"}
    ])

    return (
        <section className="container "> 
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {products.map(product => <ProductFeaturedCardComponent offPriceOnItem={product.offPriceOnItemValue} key={product.id} item={product}/>)}
                </div>
            </div>
        </section>
    )
}

export default ProductFeaturedSection