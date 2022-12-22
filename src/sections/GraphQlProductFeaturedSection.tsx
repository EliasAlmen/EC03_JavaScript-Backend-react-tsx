import { gql, useQuery } from "@apollo/client";
import React from "react";
import GraphQlProductCardComponent from "../components/GraphQlProductCardComponent";

interface ProductCardType {
    title: string;
};
// Query for specific tag
const FEATURED_PRODUCTS_QUERY = gql`{ productTag(tag: "featured") { _id, name, category, tag, price, description, rating, imageName }}`

const GraphQlProductFeaturedSection: React.FC<ProductCardType> = ({ title }) => {
    const { loading, error, data } = useQuery(FEATURED_PRODUCTS_QUERY)
    if (loading) return <p>Laddar...</p>
    if (error) return <p>Ett fel uppstod : {error.message}</p>;
    return (
        <section className="container ">
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {
                    data.productTag.map( (product: any) => <GraphQlProductCardComponent key={product._id} item={product} /> )
                    }
                </div>
            </div>
        </section>
    );
};

export default GraphQlProductFeaturedSection;
