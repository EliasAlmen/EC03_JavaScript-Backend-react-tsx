import React from "react";
import { ItemPropModel } from "../models/ItemPropModel";
import { ProductItem } from "../models/PredefinedProductModel";
import { currencyFormatter } from "../utils/currencyFormatter";

interface ProductCardType {
    item: ProductItem
};

const CategoriesProductComponent: React.FC<ProductCardType> = ({ item }) => {
    return (
        <div className="categoriesProductContainer">
            <div className="image">
                <img src={item.imageName} alt={item.name} />
            </div>
            <div className="data">
                <span className="product-name">{item.name}</span>
                <span className="product-category">{item.category}</span>
                <span className="product-price">
                    {currencyFormatter(item.price)}
                </span>
            </div>
        </div>
    );
};

export default CategoriesProductComponent;
