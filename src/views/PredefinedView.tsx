import React from "react";
import BreadCrumbsSection from "../sections/BreadCrumbsSection";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import PredefinedSection from "../sections/PredefinedSection";

const PredefinedView: React.FC = () => {
    let currentPage = "CRUD";
    document.title = `${currentPage} || Fixxo`;

    return (
        <>
            <HeaderSection />
            <BreadCrumbsSection />
            <PredefinedSection />
            <FooterSection />
        </>
    );
};

export default PredefinedView;
