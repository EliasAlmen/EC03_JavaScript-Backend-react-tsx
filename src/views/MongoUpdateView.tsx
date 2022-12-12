import React from "react";
import BreadCrumbsSection from "../sections/BreadCrumbsSection";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import MongoUpdateSection from "../sections/MongoUpdateSection";

const MongoUpdateView: React.FC = () => {
    return (
        <>
            <HeaderSection />
            <BreadCrumbsSection />
            <MongoUpdateSection />
            <FooterSection />
        </>
    );
};

export default MongoUpdateView;
