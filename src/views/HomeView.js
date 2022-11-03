import React, { useContext } from 'react'
import { ProductContext } from '../contexts/contexts'
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
  
  const productContext = useContext(ProductContext)
  

  return (
    <>
      <HeaderSection />
      <ShowCaseSection />
      <Banner1Section />
      <ProductFeaturedSection title="Featured Products" items={productContext.featuredProducts} />
      <Banner2Section />
      <SpecialitySection />
      <FlashSaleLeftSection items={productContext.flashSaleProducts}/>
      <FlashSaleRightSection items={productContext.flashSaleProducts} />
      <Banner3Section />
      <ProductRankingSection title1={"Latest Product"} title2={"Best Selling Product"} title3={"Top Reacted Product"} items={productContext.rankingProducts} />
      <PromisesSection />
      <FooterSection />
    </>
  )
}

export default HomeView