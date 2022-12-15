import React, { useEffect } from "react";
import { MongoContextType, useMongoContext } from "../contexts/MongoContext";
// import { useProductContext, ProductContextType } from "../contexts/PredefinedProductContext";
// import { ProductContext } from "../contexts/SwaggerApicontexts";
import BreadCrumbsSection from "../sections/BreadCrumbsSection";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import ProductAllSection from "../sections/ProductAllSection";


const ProductsView: React.FC = () => {
    // const productContext: any = useContext(ProductContext);

    const {
        products,
        getAll
        
    } = useMongoContext() as MongoContextType
    
    useEffect(() => {
        getAll()
    }, [])

    let currentPage = "All Products";
    document.title = `${currentPage} || Fixxo`;
    return (
        <>
            <HeaderSection />
            <BreadCrumbsSection />
            <ProductAllSection title="All products" items={products} />
            <FooterSection />
        </>
    );
};

export default ProductsView;
