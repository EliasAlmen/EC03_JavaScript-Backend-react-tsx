import React from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import { ProductItem } from "../models/PredefinedProductModel";

interface ProductCardType {
    title1: string;
    title2: string;
    title3: string;
    items: ProductItem[]
};




const ProductRankingSection: React.FC<ProductCardType> = ({ title1, title2, title3, items= [] }) => {
    
    return (
        <section className="container-products-category-ranking">
            <div className="container">
                <div className="latest">
                    <h1>{title1}</h1>
                    {
                        items.map(product => <ProductCardComponent key={product.articleNumber} item={product} />)
                    }
                </div>
                <div className="best">
                    <h1>{title2}</h1>
                    {
                        items.map(product => <ProductCardComponent key={product.articleNumber} item={product} />)
                    }
                </div>
                <div className="reacted">
                    <h1>{title3}</h1>
                    {
                        items.map(product => <ProductCardComponent key={product.articleNumber} item={product} />)
                    }
                </div>
            </div>
            <div className="_border-bottom">
                <div className="_border"></div>
            </div>
        </section>
    );
};

export default ProductRankingSection;
