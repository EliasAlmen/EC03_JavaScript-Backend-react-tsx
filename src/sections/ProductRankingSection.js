import React from 'react'
import NavIconComponent from '../components/NavIconComponent'
import star from '../assets/img/icons/icon_star.svg'
import ProductCardComponent from '../components/ProductCardComponent'

const ProductRankingSection = ({products, title1, title2, title3}) => {
  return (
    <section className="container-products-category-ranking">
        <div className="container">
            <div className="latest">
                <h1>{title1}</h1>
                {products.map(product => <ProductCardComponent offPriceOnItem={product.offPriceOnItemValue} key={product.id} product={product}/>)}
                
            </div>
            <div className="best">
                <h1>{title2}t</h1>
                {products.map(product => <ProductCardComponent offPriceOnItem={product.offPriceOnItemValue} key={product.id} product={product}/>)}
            </div>
            <div className="reacted">
                <h1>{title3}</h1>
                {products.map(product => <ProductCardComponent offPriceOnItem={product.offPriceOnItemValue} key={product.id} product={product}/>)}
            </div>
        </div>
        <div className="_border-bottom">
            <div className="_border"></div>
        </div>
    </section>
  )
}

export default ProductRankingSection