import React from "react";
import BreadCrumbsSection from "../sections/BreadCrumbsSection";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import MongoSection from "../sections/MongoSection";

const CrudView: React.FC = () => {
    let currentPage = "MongoDB";
    document.title = `${currentPage} || Fixxo`;

    return (
        <>
            <HeaderSection />
            <BreadCrumbsSection />
            <MongoSection />
            <FooterSection />
        </>
    );
};

export default CrudView;
