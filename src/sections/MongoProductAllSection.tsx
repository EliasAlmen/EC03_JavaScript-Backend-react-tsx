import React from "react";
import MongoProductCardComponent from "../components/MongoProductCardComponent";
import { ProductItem } from "../models/PredefinedProductModel";

interface ProductCardType {
    title: string;
    items: ProductItem[]
};

const MongoProductAllSection: React.FC<ProductCardType> = ({ title, items = [] }) => {
    return (
        <section className="container ">
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {
                        items.map(product => <MongoProductCardComponent key={product.articleNumber} item={product} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MongoProductAllSection;
