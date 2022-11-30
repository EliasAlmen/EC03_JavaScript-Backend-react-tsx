import React from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import { ItemPropArrayModel } from "../models/ItemPropArrayModel";

const ProductRelatedSection: React.FC<ItemPropArrayModel> = ({
    title,
    items = [],
}) => {
    return (
        <section className="container">
            <h3 id="related">{title}</h3>
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
    );
};

export default ProductRelatedSection;
