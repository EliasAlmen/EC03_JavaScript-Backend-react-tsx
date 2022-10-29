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
  
  // for science and fun
  function generateRandomNumber() {
    var min = 1
    var max = 5
    let randomNumber
    randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
  }
  
  // for science and fun
  function generateRandomBool() {
    var booleanValue;
    if ( Math.random() > .5 ){
      booleanValue = true;
    } else {
      booleanValue = false;  
    }
    return booleanValue;
  }
  
  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, offPriceOnItemValue: generateRandomBool(), offPrice: "$17.50", price: "$35.00", productName: "Modern Black Blouse", category: "Fashion", rating: generateRandomNumber(), img: "https://via.placeholder.com/208x256"},
    { id: 2, offPriceOnItemValue: generateRandomBool(), offPrice: "$150.00", price: "$250.00", productName: "Blue silk flare sleeved top", category: "Fashion", rating: generateRandomNumber(), img: "https://via.placeholder.com/208x256"},
    { id: 3, offPriceOnItemValue: generateRandomBool(), offPrice: "$250.00", price: "$500.00", productName: "New look men's coat", category: "Casual", rating: generateRandomNumber(), img: "https://via.placeholder.com/208x256"},
    { id: 4, offPriceOnItemValue: generateRandomBool(), offPrice: "$2.50", price: "$5.00", productName: "Circle pattern girls shirt", category: "Fashion", rating: generateRandomNumber(), img: "https://via.placeholder.com/208x256"},
    { id: 5, offPriceOnItemValue: generateRandomBool(), offPrice: "$10.00", price: "$20.00", productName: "New look men's sneakers", category: "Casual", rating: generateRandomNumber(), img: "https://via.placeholder.com/208x256"},
    { id: 6, offPriceOnItemValue: generateRandomBool(), offPrice: "$1500.00", price: "$3500.00", productName: "Red women's blazer full", category: "Fashion", rating: generateRandomNumber(), img: "https://via.placeholder.com/208x256"},
    { id: 7, offPriceOnItemValue: generateRandomBool(), offPrice: "$150.00", price: "$350.00", productName: "Men's denim shirts full", category: "Casual", rating: generateRandomNumber(), img: "https://via.placeholder.com/208x256"},
    { id: 8, offPriceOnItemValue: generateRandomBool(), offPrice: "$25.00", price: "$50.00", productName: "Women's leather bag", category: "Casual", rating: generateRandomNumber(), img: "https://via.placeholder.com/208x256"}
  ])

  const [flashSaleProducts, setflashSaleProducts] = useState([
    { id: 9, offPriceOnItemValue: true, offPrice: "$15.00", price: "$35.00", productName: "Modern Black Blouse", category: "Work", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 10, offPriceOnItemValue: true, offPrice: "$150.00", price: "$250.00", productName: "Blue silk flare sleeved top", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 11, offPriceOnItemValue: true, offPrice: "$250.00", price: "$500.00", productName: "New look men's coat", category: "Work", rating: 5, img: "https://via.placeholder.com/208x256"},
    { id: 12, offPriceOnItemValue: true, offPrice: "$2.50", price: "$5.00", productName: "Circle pattern girls shirt", category: "Fashion", rating: 5, img: "https://via.placeholder.com/208x256"},
  ])

  const [rankingProducts, setrankingProducts] = useState([
    { id: 13, offPriceOnItemValue: false, offPrice: "$15.00", price: "$35.00", productName: "Modern Black Blouse", category: "Fashion", rating: 5, img: "https://via.placeholder.com/132x160"},
    { id: 14, offPriceOnItemValue: false, offPrice: "$150.00", price: "$250.00", productName: "Blue silk flare sleeved top", category: "Work", rating: 5, img: "https://via.placeholder.com/132x160"},
    { id: 15, offPriceOnItemValue: false, offPrice: "$250.00", price: "$500.00", productName: "New look men's coat", category: "Fashion", rating: 5, img: "https://via.placeholder.com/132x160"},
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