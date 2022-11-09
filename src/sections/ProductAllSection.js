import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'

const ProductAllSection = ({title, items = []}) => {

    return (
        <section className="container "> 
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {
                    items.map(item => <ProductCardComponent key={item.articleNumber} item={item}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductAllSection