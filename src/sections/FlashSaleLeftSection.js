import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'

const FlashSaleLeftSection = ({items=[]}) => {
  

  
  return (
    <section className="container">
        <div className="container-flashsale-left">
            <div className="flashsale">
                <h1>2 FOR USD $29</h1>
                <button className="button button-white bg-light">FLASH SALE</button>
            </div>
            <div className="container-cards">
              {
              items.map(product => <ProductCardComponent key={product.articleNumber} product={product}/>)
              }
            </div>
        </div>
    </section>
  )
}

export default FlashSaleLeftSection