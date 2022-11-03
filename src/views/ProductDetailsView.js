import React, { useEffect, useState } from 'react'
import Banner4Section from '../sections/Banner4Section'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import { useParams } from 'react-router-dom'

const ProductDetailsView = () => {

  
  
  const [singleProduct, setSingleProduct] = useState({});
  const id = useParams()
  console.log(id);
  
  

  useEffect(() => {
    const fetchDetails = () => {
      fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
      .then(res => res.json())
      .then(data => setSingleProduct(data))
    };
    fetchDetails();
  }, [id]);
  

  

  // const [productDetails, setProductDetail] = useState([])


  // useEffect(() => {
  //   const fetchDetails = async () => {
  //     let result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${artnr}`)
  //     setProductDetail(result.json())
  //   }
  //   fetchDetails();

  // }, [artnr])
  
  // const singleProduct = productDetails.filter(prod => prod.articleNumber === artnr)

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
              <h1>{singleProduct.name}</h1>
              <p>ID:{singleProduct.articleNumber}{`\u00a0\u00a0`}Category:{`\u00a0\u00a0`}{singleProduct.category}</p>
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