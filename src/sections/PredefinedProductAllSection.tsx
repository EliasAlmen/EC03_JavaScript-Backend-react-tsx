import React from "react";
import PredefinedProductCardComponent from "../components/PredefinedProductCardComponent";
import { ProductItem } from "../models/PredefinedProductModel";

interface ProductCardType {
    title: string;
    items: ProductItem[]
};

const PredefinedProductAllSection: React.FC<ProductCardType> = ({ title, items = [] }) => {
    return (
        <section className="container ">
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {
                        items.map(product => <PredefinedProductCardComponent key={product.articleNumber} item={product} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PredefinedProductAllSection;
