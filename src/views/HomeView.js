import React from 'react'
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
  return (
    <>
      <HeaderSection />
      <ShowCaseSection />
      <Banner1Section />
      <ProductFeaturedSection />
      <Banner2Section />
      <SpecialitySection />
      <FlashSaleLeftSection />
      <FlashSaleRightSection />
      <Banner3Section />
      <ProductRankingSection />
      <PromisesSection />
      <FooterSection />
    </>
  )
}

export default HomeView