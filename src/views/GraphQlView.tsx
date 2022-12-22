import React from 'react'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import FooterSection from '../sections/FooterSection'
import GraphQlSection from '../sections/GraphQlSection'
import HeaderSection from '../sections/HeaderSection'

const GraphQlView: React.FC = () => {
    return (
        <>
            <HeaderSection />
            <BreadCrumbsSection />
            <GraphQlSection />
            <FooterSection />
        </>
    )
}

export default GraphQlView