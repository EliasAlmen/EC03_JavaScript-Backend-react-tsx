import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'

const ProductFeaturedSection = ({title, items=[]}) => {


    return (
        <section className="container "> 
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {
                    items.map(product => <ProductCardComponent key={product.articleNumber} product={product}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductFeaturedSection