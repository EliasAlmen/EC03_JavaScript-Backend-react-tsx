import React, { useEffect } from "react";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import BreadCrumbsSection from "../sections/BreadCrumbsSection";
import CategoriesSection from "../sections/CategoriesSection";
import { MongoContextType, useMongoContext } from "../contexts/MongoContext";

const CategoriesView: React.FC = () => {
    let currentPage = "Categories";
    document.title = `${currentPage} || Fixxo`;

    const {
        mongoProducts,
        mongoGetAll

    } = useMongoContext() as MongoContextType

    useEffect(() => {
        mongoGetAll()
    }, [])

    return (
        <>
            <HeaderSection />
            <BreadCrumbsSection />
            <h3 className="text-center fw-bolder">(MongoDB)</h3>
            <CategoriesSection items={mongoProducts} />
            <FooterSection />
        </>
    );
};

export default CategoriesView;
