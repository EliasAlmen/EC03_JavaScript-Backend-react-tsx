import React from "react";
import { NavLink } from "react-router-dom";
import MongoProductCardComponent from "../components/MongoProductCardComponent";
import ProductCardComponent from "../components/ProductCardComponent";
// import { ItemPropArrayModel } from "../models/ItemPropArrayModel";
import { ProductItem } from "../models/PredefinedProductModel";

interface ProductCardType {
    items: ProductItem[]
};

const MongoFlashSaleLeftSection: React.FC<ProductCardType> = ({ items = [] }) => {
    return (
        <section className="container">
            <div className="container-flashsale-left">
                <div className="flashsale">
                    <h1>2 FOR USD $29</h1>
                    <NavLink
                        to={`/products`}
                        className="button button-white bg-light"
                    >
                        FLASH SALE
                    </NavLink>
                </div>
                <div className="container-cards">
                    {items.map((item) => (
                        <MongoProductCardComponent
                            key={item.articleNumber}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MongoFlashSaleLeftSection;
