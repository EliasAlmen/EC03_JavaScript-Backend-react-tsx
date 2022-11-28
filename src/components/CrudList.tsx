import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  CrudProductContext,
  ICrudProductContext,
} from "../contexts/CrudContext";
import { CrudProduct } from "../models/CrudModel";
import { currencyFormatter } from "../utils/currencyFormatter";

const CrudList = () => {
  const { crudProducts, getAll, remove } = React.useContext(
    CrudProductContext
  ) as ICrudProductContext;

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <h3 className="mb-4 text-center fw-bold">Products</h3>
      <div className="featured">
        <div className="container-cards">
          {crudProducts.map((crudProduct: CrudProduct) => (
            <React.Fragment key={crudProduct.id}>
              <div className="card-product">
                <div className="img-container">
                  <div className="quick-menu">
                    <NavLink
                      className="linkUpdate nav-icon"
                      to={`/crud/${crudProduct.id}`}
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
                      to={`/products/${crudProduct.id}`}
                      className="button btn-hover bg-red"
                    >
                      QUICK VIEW
                    </NavLink>
                  </div>
                  <img
                    src="https://via.placeholder.com/256x208"
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
                        <i key={i} className="fa-sharp fa-solid fa-star"></i>
                      ))}
                  </span>
                  <div className="bothPrices">
                    <p>{currencyFormatter(crudProduct.price)}</p>
                  </div>
                </div>
              </div>
              {/* <div className="mb-3 crudList align-middle bg list-group-item">
                    <NavLink
                      className="linkUpdate button bg-white"
                      to={`/crud/${crudProduct.id}`}
                    >
                      <i className="fa-regular fa-gears align-middle fw-bold text-dark fs-4 me-3"></i>
                    </NavLink>
                    <button
                      className="removeItem button bg-red"
                      onClick={() => {
                        remove(crudProduct.id);
                      }}
                    >
                      <i className="fa-regular fa-trash align-middle fw-bold text-dark fs-4 me-3"></i>
                    </button>
                    <span className="name">{crudProduct.name}</span>
                    <span className="category">{crudProduct.category}</span>
                    <span className="description">{crudProduct.description}</span>
                    <span className="rating">
                      {Array(crudProduct.rating)
                        .fill(0)
                        .map((_, i) => (
                          <i key={i} className="fa-sharp fa-solid fa-star"></i>
                        ))}
                    </span>
                    <span className="price">{crudProduct.price}</span>
                  </div> */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default CrudList;
