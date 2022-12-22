import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CrudProductContext, ICrudProductContext, } from "../contexts/CrudContext";
import { CrudProduct } from "../models/CrudModel";
import { currencyFormatter } from "../utils/currencyFormatter";

const CrudList = () => {
    const { crudProducts, getAll, remove } = React.useContext(CrudProductContext) as ICrudProductContext;

    useEffect(() => {
        getAll();
    }, [getAll]);

    return (
        <>
            <div className="featured">
                <div className="container-cards">
                    {crudProducts.map((crudProduct: CrudProduct) => (
                        <React.Fragment key={crudProduct.id}>
                            <div className="card-product">
                                <div className="img-container">
                                    <div className="quick-menu">
                                        <NavLink
                                            className="linkUpdate nav-icon"
                                            to={`/crudupdate/${crudProduct.id}`}
                                        >
                                            <i className="fa-regular fa-gears"></i>
                                        </NavLink>
                                        <div
                                            className="removeItem nav-icon"
                                            onClick={() => {
                                                remove(crudProduct.id);
                                            }}
                                        >
                                            <i className="fa-regular fa-trash"></i>
                                        </div>
                                    </div>
                                    <div className="quick-view">
                                        <NavLink
                                            to={`/cruddetail/${crudProduct.id}`}
                                            className="button btn-hover bg-red"
                                        >
                                            QUICK VIEW
                                        </NavLink>
                                    </div>
                                    <img
                                        src='https://via.placeholder.com/256x208'
                                        alt={crudProduct.name}
                                    />
                                </div>
                                <div className="text">
                                    <h5>{crudProduct.category}</h5>
                                    <h6>{crudProduct.name}</h6>
                                    <span>
                                        {Array(crudProduct.rating)
                                            .fill(0)
                                            .map((_, i) => (
                                                <i
                                                    key={i}
                                                    className="fa-sharp fa-solid fa-star"
                                                ></i>
                                            ))}
                                    </span>
                                    <div className="bothPrices">
                                        <p>
                                            {currencyFormatter(
                                                crudProduct.price
                                            )}
                                        </p>
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

export default CrudList;
