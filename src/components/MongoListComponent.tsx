import React from "react";
import { NavLink } from "react-router-dom";
import { MongoContextType, useMongoContext } from "../contexts/MongoContext";
import { MongoProductItem } from "../models/MongoProductModel";
import { currencyFormatter } from "../utils/currencyFormatter";
// import ProductCardComponent from "./ProductCardComponent";


interface ProductCardType {
    items: MongoProductItem[]
};

const MongoListComponent: React.FC<ProductCardType> = ({ items = [] }) => {

    const { remove } = useMongoContext() as MongoContextType;


    return (
        <>
            <div className="featured">
                <div className="container-cards">
                    {/* {
                        items.map(product => <ProductCardComponent key={product.articleNumber} item={product} />)
                    } */}
                    {items.map((product: MongoProductItem) => (
                        <React.Fragment key={product.articleNumber}>
                            <div className="card-product">
                                <div className="img-container">
                                    <div className="quick-menu">
                                        <NavLink
                                            className="linkUpdate nav-icon"
                                            to={`/mongo/update/${product.articleNumber}`}
                                        >
                                            <i className="fa-regular fa-gears"></i>
                                        </NavLink>
                                        <div
                                            className="removeItem nav-icon"
                                            onClick={() => {
                                                remove(product.articleNumber);
                                            }}
                                        >
                                            <i className="fa-regular fa-trash"></i>
                                        </div>
                                    </div>
                                    <div className="quick-view">
                                        <NavLink
                                            to={`/mongo/details/${product.articleNumber}`}
                                            className="button btn-hover bg-red"
                                        >
                                            QUICK VIEW
                                        </NavLink>
                                    </div>
                                    <img
                                        src={product.imageName}
                                        alt={product.name}
                                    />
                                </div>
                                <div className="text">
                                    <h5>{product.category}</h5>
                                    <h6>{product.name}</h6>
                                    <span>
                                        {Array(product.rating)
                                            .fill(0)
                                            .map((_, i) => (
                                                <i
                                                    key={i}
                                                    className="fa-sharp fa-solid fa-star"
                                                ></i>
                                            ))}
                                    </span>
                                    <div className="bothPrices">
                                        <p>{currencyFormatter(product.price)}</p>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MongoListComponent;
