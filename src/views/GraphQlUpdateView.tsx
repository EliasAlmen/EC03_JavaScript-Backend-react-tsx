import React from 'react'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import FooterSection from '../sections/FooterSection'
import GraphQlUpdateSection from '../sections/GraphQlUpdateSection'
import HeaderSection from '../sections/HeaderSection'

const GraphQlUpdateView: React.FC = () => {
  return (
      <>
          <HeaderSection />
          <BreadCrumbsSection />
          <GraphQlUpdateSection />
          <FooterSection />
      </>
  )
}

export default GraphQlUpdateView