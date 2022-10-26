import React from 'react'
import ProductFeaturedCardComponent from '../components/ProductFeaturedCardComponent'

const ProductFeaturedSection = ({title, products}) => {

    return (
        <section className="container "> 
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {products.map(product => <ProductFeaturedCardComponent offPriceOnItem={product.offPriceOnItemValue} key={product.id} product={product}/>)}
                </div>
            </div>
        </section>
    )
}

export default ProductFeaturedSection