import React from "react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../contexts/shoppingCartContext";
import { ItemPropModel } from "../models/ItemPropModel";
import { currencyFormatter } from "../utils/currencyFormatter";

const ProductCardComponent: React.FC<ItemPropModel> = ({ item }) => {
    const { incrementQuantity } = useShoppingCart();

    return (
        <div className="card-product">
            <div className="img-container">
                <div className="quick-menu">
                    <button className="nav-icon">
                        <i
                            title="magnifying glass"
                            className="fa-regular fa-magnifying-glass"
                        ></i>
                    </button>
                    <button className="nav-icon">
                        <i
                            title="compare"
                            className="fa-regular fa-code-compare"
                        ></i>
                    </button>
                    <button
                        onClick={() =>
                            incrementQuantity({
                                articleNumber: item.articleNumber,
                                product: item,
                            })
                        }
                        title="Shopping"
                        className="nav-icon"
                    >
                        <i className="fa-regular fa-bag-shopping"></i>
                    </button>
                </div>
                <div className="quick-view">
                    <NavLink
                        to={`/products/${item.articleNumber}`}
                        className="button btn-hover bg-red"
                    >
                        QUICK VIEW
                    </NavLink>
                </div>
                <img src={item.imageName} alt={item.name} />
            </div>
            <div className="text">
                <h5>{item.category}</h5>
                <h6>{item.name}</h6>
                <span>
                    {Array(item.rating)
                        .fill(0)
                        .map((_, i) => (
                            <i
                                key={i}
                                className="fa-sharp fa-solid fa-star"
                            ></i>
                        ))}
                </span>
                <div className="bothPrices">
                    <p>{currencyFormatter(item.price)}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCardComponent;
