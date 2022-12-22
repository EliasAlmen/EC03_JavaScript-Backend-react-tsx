import React from 'react'
import Banner4Section from '../sections/Banner4Section';
import BreadCrumbsSection from '../sections/BreadCrumbsSection';
import FooterSection from '../sections/FooterSection';
import GraphQLDetailSection from '../sections/GrapQlDetailSection';
import HeaderSection from '../sections/HeaderSection';
import ProductRelatedSection from '../sections/ProductRelatedSection';

const GraphQlDetailView: React.FC = () => {
    let currentPage = "Details";
    document.title = `${currentPage} || Fixxo`;

    return (
        <>
            <HeaderSection />
            <Banner4Section />
            <BreadCrumbsSection />
            <GraphQLDetailSection />
            <ProductRelatedSection />
            <FooterSection />
        </>
    )
}

export default GraphQlDetailView