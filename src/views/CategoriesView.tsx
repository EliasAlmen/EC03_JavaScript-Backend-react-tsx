import React, { useEffect } from "react";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import BreadCrumbsSection from "../sections/BreadCrumbsSection";
import CategoriesSection from "../sections/CategoriesSection";
// import { ProductContext } from "../contexts/SwaggerApicontexts";
import { MongoContextType, useMongoContext } from "../contexts/MongoContext";

const CategoriesView: React.FC = () => {
    let currentPage = "Categories";
    document.title = `${currentPage} || Fixxo`;
    // const productContext: any = useContext(ProductContext);

    const {
        products,
        getAll

    } = useMongoContext() as MongoContextType

    useEffect(() => {
        getAll()
    }, [])

    return (
        <>
            <HeaderSection />
            <BreadCrumbsSection />
            <CategoriesSection items={products} />
            <FooterSection />
        </>
    );
};

export default CategoriesView;
