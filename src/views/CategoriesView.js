import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import CategoriesSection from '../sections/CategoriesSection'
import { ProductContext } from '../contexts/contexts'

const CategoriesView = () => {
  let currentPage = "Categories"
  window.top.document.title = `${currentPage} || Fixxo`
  const productContext = useContext(ProductContext)
  
  
  return (
    <>
      <HeaderSection />
      <BreadCrumbsSection />
      <CategoriesSection items={productContext} />
      <FooterSection />
    </>
  )
}

export default CategoriesView