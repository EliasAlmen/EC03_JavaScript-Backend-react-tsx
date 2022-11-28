import React from 'react'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import CrudUpdateSection from '../sections/CrudUpdateSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'

const CrudDetailView = () => {
  return (
    <>
            <HeaderSection />
            <BreadCrumbsSection />
            <CrudUpdateSection />
            <FooterSection />
        </>
  )
}

export default CrudDetailView