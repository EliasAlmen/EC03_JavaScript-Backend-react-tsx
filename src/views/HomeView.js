import React, { useState } from 'react'
import Banner1Section from '../sections/Banner1Section'
import Banner2Section from '../sections/Banner2Section'
import Banner3Section from '../sections/Banner3Section'
import FlashSaleLeftSection from '../sections/FlashSaleLeftSection'
import FlashSaleRightSection from '../sections/FlashSaleRightSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import ProductFeaturedSection from '../sections/ProductFeaturedSection'
import ProductRankingSection from '../sections/ProductRankingSection'
import PromisesSection from '../sections/PromisesSection'
import ShowCaseSection from '../sections/ShowCaseSection'
import SpecialitySection from '../sections/SpecialitySection'

const HomeView = () => {
  
  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, offPriceOnItemValue: false, price: "$35.00", productName: "Modern Black Blouse", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 2, offPriceOnItemValue: true, offPrice: "$150.00", price: "$250.00", productName: "Blue silk flare sleeved top", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 3, offPriceOnItemValue: false, price: "$500.00", productName: "New look men's coat", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 4, offPriceOnItemValue: false, price: "$5.00", productName: "Circle pattern girls shirt", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 5, offPriceOnItemValue: true, offPrice: "$10.00", price: "$20.00", productName: "New look men's sneakers", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 6, offPriceOnItemValue: false, price: "$3500.00", productName: "Red women's blazer full", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 7, offPriceOnItemValue: false, price: "$350.00", productName: "Men's denim shirts full", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 8, offPriceOnItemValue: false, price: "$50.00", productName: "Women's leather bag", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"}
  ])

  const [flashSaleProducts, setflashSaleProducts] = useState([
    { id: 1, offPriceOnItemValue: true, offPrice: "$15.00", price: "$35.00", productName: "Modern Black Blouse", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 2, offPriceOnItemValue: true, offPrice: "$150.00", price: "$250.00", productName: "Blue silk flare sleeved top", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 3, offPriceOnItemValue: true, offPrice: "$250.00", price: "$500.00", productName: "New look men's coat", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 4, offPriceOnItemValue: true, offPrice: "$2.50", price: "$5.00", productName: "Circle pattern girls shirt", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
  ])

  const [rankingProducts, setrankingProducts] = useState([
    { id: 1, offPriceOnItemValue: false, offPrice: "$15.00", price: "$35.00", productName: "Modern Black Blouse", category: "Fashion", rating: 5, img: "https://via.placeholder.com/132x160"},
    { id: 2, offPriceOnItemValue: false, offPrice: "$150.00", price: "$250.00", productName: "Blue silk flare sleeved top", category: "Fashion", rating: 5, img: "https://via.placeholder.com/132x160"},
    { id: 3, offPriceOnItemValue: false, offPrice: "$250.00", price: "$500.00", productName: "New look men's coat", category: "Fashion", rating: 5, img: "https://via.placeholder.com/132x160"},
  ])
  
  
  return (
    <>
      <HeaderSection />
      <ShowCaseSection />
      <Banner1Section />
      <ProductFeaturedSection title="Featured Products" products={featuredProducts} />
      <Banner2Section />
      <SpecialitySection />
      <FlashSaleLeftSection products={flashSaleProducts} />
      <FlashSaleRightSection products={flashSaleProducts} />
      <Banner3Section />
      <ProductRankingSection title1={"Latest Product"} title2={"Best Selling Product"} title3={"Top Reacted Product"} products={rankingProducts} />
      <PromisesSection />
      <FooterSection />
    </>
  )
}

export default HomeView