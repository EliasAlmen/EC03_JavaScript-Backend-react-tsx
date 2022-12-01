import React, { useContext } from "react";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import BreadCrumbsSection from "../sections/BreadCrumbsSection";
import CategoriesSection from "../sections/CategoriesSection";
import { ProductContext } from "../contexts/SwaggerApicontexts";

const CategoriesView: React.FC = () => {
    let currentPage = "Categories";
    document.title = `${currentPage} || Fixxo`;
    const productContext: any = useContext(ProductContext);

    return (
        <>
            <HeaderSection />
            <BreadCrumbsSection />
            <CategoriesSection items={productContext} />
            <FooterSection />
        </>
    );
};

export default CategoriesView;
