import React, { useEffect, useState } from 'react'
import Banner4Section from '../sections/Banner4Section'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import { useParams } from 'react-router-dom'
import ExternalLinkIconComponent from '../components/ExternalLinkIconComponent'

const ProductDetailsView = () => {

  const { id } = useParams()

  const [data, setData] = useState([])

  useEffect(() => {

    const fetchDetails = async () => {
      await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`, {
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
    }
    fetchDetails()
  }, [setData]);

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
                <img src={data.imageName} alt={data.name}></img>
              </div>
              <div id="small-1" className="small-image">
                <img src={data.imageName} alt={data.name}></img>
              </div>
              <div id="small-2" className="small-image">
                <img src={data.imageName} alt={data.name}></img>
              </div>
              <div id="small-3" className="small-image">
                <img src={data.imageName} alt={data.name}></img>
              </div>
            </div>
            <div className="shop">
              <h1>{data.name}</h1>
              <p>SKU:{`\u00a0\u00a0`}{data.articleNumber}</p>
              <p>CATEGORY:{`\u00a0\u00a0`}{data.category}</p>
              {Array(data.rating).fill(0).map((_, i) => <i key={i} className="fa-sharp fa-solid fa-star"></i>)}
              <p className="price">${data.price}.00</p>
              <p className="description">{data.description}Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (read more)</p>
              <div className="user-options">
                <div className="size">Size:
                  <span>S M L X</span>
                </div>
                <div className="color">Color:</div>
                <div className="qty">Qty:</div>
                <div className="share">
                  Share:
                  <ExternalLinkIconComponent link="https://facebook.com" icon="fa-facebook" />
                  <ExternalLinkIconComponent link="https://instagram.com" icon="fa-instagram" />
                  <ExternalLinkIconComponent link="https://twitter.com" icon="fa-twitter" />
                  <ExternalLinkIconComponent link="https://google.com" icon="fa-google" />
                  <ExternalLinkIconComponent link="https://linkedin.com" icon="fa-linkedin" />
                </div>
              </div>
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