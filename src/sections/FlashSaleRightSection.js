import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'

const FlashSaleRightSection = ({items=[]}) => {
  
  
  
  return (
    <section className="container">
        <div className="container-flashsale-right">
            <div className="container-cards">
              {
              items.map(item => <ProductCardComponent key={item.articleNumber} item={item}/>)
              }
            </div>
            <div className="flashsale">
                <h1>2 FOR USD $29</h1>
                <button className="button button-white bg-light">FLASH SALE</button>
            </div>
        </div>
    </section>
  )
}

export default FlashSaleRightSection