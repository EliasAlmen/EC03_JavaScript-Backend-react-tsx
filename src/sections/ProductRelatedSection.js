import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'

const ProductRelatedSection = ({ title, items = [] }) => {
    return (
        <section className="container">
            <h3 id="related">{title}</h3>
            <div className="related">
                <div className="container-cards">
                    {
                        items.map(item => <ProductCardComponent key={item.articleNumber} item={item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductRelatedSection