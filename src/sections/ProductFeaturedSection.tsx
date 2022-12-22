import React from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import { ProductItem } from "../models/PredefinedProductModel";

interface ProductCardType {
    title: string;
    items: ProductItem[]
};

const ProductFeaturedSection: React.FC<ProductCardType> = ({ title, items = [] }) => {
    return (
        <section className="container ">
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {
                    items.map( product => <ProductCardComponent key={product.articleNumber} item={product} /> )
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductFeaturedSection;
