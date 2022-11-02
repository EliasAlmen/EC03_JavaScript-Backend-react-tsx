import React, { useContext } from 'react'
import ProductCardComponent from '../components/ProductCardComponent'
import { ProductContext } from '../contexts/contexts'

const ProductRankingSection = ({title1, title2, title3}) => {
  
    const products = useContext(ProductContext)


    return (
    <section className="container-products-category-ranking">
        <div className="container">
            <div className="latest">
                <h1>{title1}</h1>
                {products.rankingProducts.map(product => <ProductCardComponent offPriceOnItem={product.offPriceOnItemValue} key={product.articleNumber} product={product}/>)}
                
            </div>
            <div className="best">
                <h1>{title2}t</h1>
                {products.rankingProducts.map(product => <ProductCardComponent offPriceOnItem={product.offPriceOnItemValue} key={product.articleNumber} product={product}/>)}
            </div>
            <div className="reacted">
                <h1>{title3}</h1>
                {products.rankingProducts.map(product => <ProductCardComponent offPriceOnItem={product.offPriceOnItemValue} key={product.articleNumber} product={product}/>)}
            </div>
        </div>
        <div className="_border-bottom">
            <div className="_border"></div>
        </div>
    </section>
  )
}

export default ProductRankingSection