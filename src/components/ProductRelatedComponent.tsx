import React from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import { ProductItem } from "../models/PredefinedProductModel";

interface ProductCardType {
    items: ProductItem[]
};

const ProductRelatedComponent: React.FC<ProductCardType> = ({ items = [] }) => {
    return (
        <section className="container">
            <div className="related">
                <div className="container-cards">
                    {items.map((item) => (
                        <ProductCardComponent
                            key={item.articleNumber}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductRelatedComponent