import React, { useContext, useEffect, useState } from "react";
import { MongoContextType, useMongoContext } from "../contexts/MongoContext";
import { useProductContext, ProductContextType } from "../contexts/PredefinedProductContext";
import { ProductContext } from "../contexts/SwaggerApicontexts";
// import { useProductContext, ProductContextType } from "../contexts/PredefinedProductContext";
// import { ProductContext } from "../contexts/SwaggerApicontexts";
import BreadCrumbsSection from "../sections/BreadCrumbsSection";
import FooterSection from "../sections/FooterSection";
import GraphQlProductAllSection from "../sections/GraphQlProductAllSection";
import HeaderSection from "../sections/HeaderSection";
import MongoProductAllSection from "../sections/MongoProductAllSection";
import PredefinedProductAllSection from "../sections/PredefinedProductAllSection";
import ProductAllSection from "../sections/ProductAllSection";


const ProductsView: React.FC = () => {
    // const productContext: any = useContext(ProductContext);
    let currentPage = "All Products";
    document.title = `${currentPage} || Fixxo`;

    //mongoDB
    const {
        mongoProducts,
        mongoGetAll

    } = useMongoContext() as MongoContextType

    //predefined
    const {
        products,
        getAll
    } = useProductContext() as ProductContextType
    
    useEffect(() => {
        mongoGetAll()
        getAll()
    }, [])

    

    //Swagger
    const productContext: any = useContext(ProductContext);

    // States for buttons and which component to display
    const [displayA, setDisplayA] = useState(true);
    const [displayB, setDisplayB] = useState(false);
    const [displayC, setDisplayC] = useState(false);
    const [displayD, setDisplayD] = useState(false);

    const showA = () => {
        setDisplayA(true);
        setDisplayB(false);
        setDisplayC(false);
        setDisplayD(false);
    }
    const showB = () => {
        setDisplayA(false);
        setDisplayB(true);
        setDisplayC(false);
        setDisplayD(false);
    };
    const showC = () => {
        setDisplayA(false);
        setDisplayB(false);
        setDisplayC(true);
        setDisplayD(false);
    };
    const showD = () => {
        setDisplayA(false);
        setDisplayB(false);
        setDisplayC(false);
        setDisplayD(true);
    };


    return (
        <>
            <HeaderSection />
            <span className="d-flex justify-content-center sticky-top">
                {/* <button type="button" className="btn btn-secondary" onClick={handleClick}>{databaseButton}</button> */}
                <button type="button" className="btn btn-secondary" onClick={showA}>MongoDB</button>
                <button type="button" className="btn btn-secondary" onClick={showB}>Predefined</button>
                <button type="button" className="btn btn-secondary" onClick={showC}>GraphQL</button>
                <button type="button" className="btn btn-secondary" onClick={showD}>Swagger</button>
            </span>
            <BreadCrumbsSection />
            {displayA && <MongoProductAllSection title="All Products (MongoDB)" items={mongoProducts} />}
            {displayB && <PredefinedProductAllSection title="All Products (predefined)" items={products} />}
            {displayC && <GraphQlProductAllSection title="All Products (GraphQL)" />}
            {displayD && <ProductAllSection title="All Products (Swagger)" items={productContext} />}
            <FooterSection />
        </>
    );
};

export default ProductsView;
