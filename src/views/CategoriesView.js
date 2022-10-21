import React from 'react'
import UnderConstructionComponent from '../components/UnderConstructionComponent'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'

const CategoriesView = () => {
  return (
    <>
      <HeaderSection />
      <BreadCrumbsSection />
      <UnderConstructionComponent />
      <FooterSection />
    </>
  )
}

export default CategoriesView