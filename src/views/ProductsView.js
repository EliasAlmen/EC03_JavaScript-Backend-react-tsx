import React, { useContext } from 'react'
import { ProductContext } from '../contexts/contexts'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import ProductAll from '../sections/ProductAll'

const ProductsView = () => {

  const productContext = useContext(ProductContext)


  return (
    <>
      <HeaderSection />
      <BreadCrumbsSection />
      <ProductAll title="TEst" items={productContext.allProducts}/>
      <FooterSection />
    </>
  )
}

export default ProductsView