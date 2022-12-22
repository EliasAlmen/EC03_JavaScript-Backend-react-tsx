import React, { useEffect } from "react";
import PredefinedProductCardComponent from "../components/PredefinedProductCardComponent";
import ProductCardComponent from "../components/ProductCardComponent";
import { ProductContextType, useProductContext } from "../contexts/PredefinedProductContext";
import { ProductItem } from "../models/PredefinedProductModel";
// import { ItemPropArrayModel } from "../models/ItemPropArrayModel";
// import { ProductItem } from "../models/PredefinedProductModel";

interface ProductCardType {
    title1: string;
    title2: string;
    title3: string;
    itemsOne: ProductItem[]
    itemsTwo: ProductItem[]
    itemsThree: ProductItem[]
};




const PredefinedProductRankingSection: React.FC<ProductCardType> = ({ title1, title2, title3, itemsOne = [], itemsTwo = [], itemsThree = [] }) => {
    
    return (
        <section className="container-products-category-ranking">
            <div className="container">
                <div className="latest">
                    <h1>{title1}</h1>
                    {
                        itemsOne.map(product => <PredefinedProductCardComponent key={product.articleNumber} item={product} />)
                    }
                </div>
                <div className="best">
                    <h1>{title2}</h1>
                    {
                        itemsTwo.map(product => <PredefinedProductCardComponent key={product.articleNumber} item={product} />)
                    }
                </div>
                <div className="reacted">
                    <h1>{title3}</h1>
                    {
                        itemsThree.map(product => <PredefinedProductCardComponent key={product.articleNumber} item={product} />)
                    }
                </div>
            </div>
            <div className="_border-bottom">
                <div className="_border"></div>
            </div>
        </section>
    );
};

export default PredefinedProductRankingSection;
