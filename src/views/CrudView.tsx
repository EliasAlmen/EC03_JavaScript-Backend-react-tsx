import React from 'react'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import CrudSection from '../sections/CrudSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'

const CrudView: React.FC = () => {
    let currentPage = "CRUD"
    document.title = `${currentPage} || Fixxo`

    return (
        <>
            <HeaderSection />
            <BreadCrumbsSection />
            <CrudSection />
            <FooterSection />
        </>
    )
}

export default CrudView