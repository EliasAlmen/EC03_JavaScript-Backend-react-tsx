import React from 'react'
import Banner1Section from '../sections/Banner1Section'
import Banner2Section from '../sections/Banner2Section'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import ShowCaseSection from '../sections/ShowCaseSection'

const HomeView = () => {
  return (
    <>
      <HeaderSection />
      <ShowCaseSection />
      <Banner1Section />
      <Banner2Section />
      <FooterSection />
    </>
  )
}

export default HomeView