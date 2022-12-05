import React from "react";
import ProductCardComponent from "../components/ProductCardComponent";
// import { ItemPropArrayModel } from "../models/ItemPropArrayModel";
import { ProductItem } from "../models/PredefinedProductModel";

interface ProductCardType {
    title: string;
    items: ProductItem[]
};

const ProductAllSection: React.FC<ProductCardType> = ({ title, items = [] }) => {
    return (
        <section className="container ">
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {
                        items.map(product => <ProductCardComponent key={product.articleNumber} item={product} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductAllSection;
