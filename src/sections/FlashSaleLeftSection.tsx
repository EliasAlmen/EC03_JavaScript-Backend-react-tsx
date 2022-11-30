import React from "react";
import { NavLink } from "react-router-dom";
import ProductCardComponent from "../components/ProductCardComponent";
import { ItemPropArrayModel } from "../models/ItemPropArrayModel";

const FlashSaleLeftSection: React.FC<ItemPropArrayModel> = ({ items = [] }) => {
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

export default FlashSaleLeftSection;
