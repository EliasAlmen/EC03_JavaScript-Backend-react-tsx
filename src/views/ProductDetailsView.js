import React, { useContext } from 'react'
import Banner4Section from '../sections/Banner4Section'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import { ProductContext } from '../contexts/contexts'

const ProductDetailsView = () => {

  // const {id} = useParams()
  
  // //Gives warning, expected === instead of ==
  // const singleProduct = DATA.find(prod => prod.id == id)

  const products = useContext(ProductContext)
  

  return (
    <>
      <HeaderSection />
      <Banner4Section />
      <BreadCrumbsSection />
      <div className="productdetails-container">
        <div className="container">
          <div className="image-shop">
            <div className="images">
              <div className="big-image">

              </div>
              <div id="small-1" className="small-image">

              </div>
              <div id="small-2" className="small-image">

              </div>
              <div id="small-3" className="small-image">

              </div>
            </div>
            <div className="shop">
              <h1>{products.product.productName}</h1>
              <p>ID:{products.id}{`\u00a0\u00a0`}Category:{`\u00a0\u00a0`}{products.category}</p>
              <i className="fa-sharp fa-solid fa-star"></i>
              <p>$35.00</p>
              <p>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (read more)</p>
              <div className="size">Size:</div>
              <div className="color">Color:</div>
              <div className="qty">Qty:</div>
              <div className="share">Share:</div>
            
            </div>
          </div>
          <div className="text-tabs">

          </div>
          <div className="related-products">

          </div>
        </div>
      </div>
      <FooterSection />
    </>
  )
}

export default ProductDetailsView