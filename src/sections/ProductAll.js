import React, { useContext } from 'react'
import ProductCardComponent from '../components/ProductCardComponent'
import { ProductContext } from '../contexts/contexts'

const ProductAll = ({title, items = []}) => {




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

export default ProductAll