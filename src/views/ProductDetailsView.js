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


  //TABS
  // https://reactjsexample.com/react-simple-tabs-made-with-an-array-of-objects/
  const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Description',
            contentRow0: 'Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.',
            contentRow1: '* Village did removed enjoyed explain nor ham saw calling talking.',
            contentRow2: '* Securing as informed declared or margaret.',
            contentRow3: '* Joy horrible moreover man feelings own shy.',
            contentRow4: 'On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. '
        },
        {
            id: 2,
            tabTitle: 'Additional',
            contentRow0: 'zero',
            contentRow1: 'one',
            contentRow2: 'tow',
            contentRow3: 'three',
            contentRow4: 'four'
        },
        {
            id: 3,
            tabTitle: 'Shopping & Returns',
            contentRow0: 'a',
            contentRow1: 'b',
            contentRow2: 'c',
            contentRow3: 'd',
            contentRow4: 'e'
        },
        {
            id: 4,
            tabTitle: 'Reviews',
            contentRow0: '0',
            contentRow1: '1',
            contentRow2: '2',
            contentRow3: '3',
            contentRow4: '4'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }





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
          <div className="text-tabs mt-5">
            <div className='tabs'>
                  {tabs.map((tab, i) =>
                      <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                  )}
              </div>
              <div className='content'>
                  {tabs.map((tab, i) =>
                      <div key={i}>
                          {currentTab === `${tab.id}` && <div><p className='mt-3'>{tab.contentRow0}</p><p>{tab.contentRow1}</p><p>{tab.contentRow2}</p><p>{tab.contentRow3}</p><p>{tab.contentRow4}</p></div>}
                      </div>
                  )}
              </div>
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