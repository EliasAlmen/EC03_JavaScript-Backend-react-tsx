import React, { useContext } from 'react'
import { ProductContext } from '../contexts/contexts'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import SearchSection from '../sections/SearchSection'

const SearchView = () => {
  let currentPage = "Search"
  window.top.document.title = `${currentPage} || Fixxo`
  const productContext = useContext(ProductContext)
  
  return (
    <>
      <HeaderSection />
      <BreadCrumbsSection />
      <SearchSection items={productContext} />
      <FooterSection />
    </>
  )
}

export default SearchView