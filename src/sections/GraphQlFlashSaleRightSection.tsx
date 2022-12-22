import { gql, useQuery } from "@apollo/client";
import React from "react";
import { NavLink } from "react-router-dom";
import GraphQlProductCardComponent from "../components/GraphQlProductCardComponent";

// Query for specific tag
const FLASHR_PRODUCTS_QUERY = gql`{ productTag(tag: "flashtwo") { _id, name, category, tag, price, description, rating, imageName }}`

const GraphQlFlashSaleRightSection: React.FC = () => {
    
    const { loading, error, data } = useQuery(FLASHR_PRODUCTS_QUERY)
    if (loading) return <p>Laddar...</p>
    if (error) return <p>Ett fel uppstod : {error.message}</p>;

    return (
        <section className="container">
            <div className="container-flashsale-right">
                <div className="container-cards">
                    {data.productTag.map((item:any) => (
                        <GraphQlProductCardComponent
                            key={item._id}
                            item={item}
                        />
                    ))}
                </div>
                <div className="flashsale">
                    <h1>2 FOR USD $29</h1>
                    <NavLink
                        to={`/products`}
                        className="button button-white bg-light"
                    >
                        FLASH SALE
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default GraphQlFlashSaleRightSection;
