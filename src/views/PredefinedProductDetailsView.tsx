import React from "react";
import Banner4Section from "../sections/Banner4Section";
import BreadCrumbsSection from "../sections/BreadCrumbsSection";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import ProductRelatedSection from "../sections/ProductRelatedSection";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PredefinedDetailSection from "../sections/PredefinedDetailSection";

const PredefinedProductDetailsView: React.FC = () => {
    let currentPage = "Details";
    document.title = `${currentPage} || Fixxo`;


    return (
        <>
            <HeaderSection />
            <Banner4Section />
            <BreadCrumbsSection />
            <PredefinedDetailSection />
            <ProductRelatedSection />
            <FooterSection />
        </>
    );
};

export default PredefinedProductDetailsView;
