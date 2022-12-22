import { gql, useQuery } from "@apollo/client";
import React from "react";
import GraphQlProductCardComponent from "../components/GraphQlProductCardComponent";

interface ProductCardType {
    title1: string;
    title2: string;
    title3: string;
};

// Query for specific tags
const RANKONE_PRODUCTS_QUERY = gql`{ productTag(tag: "rankingone") { _id, name, category, tag, price, description, rating, imageName }}`
const RANKTWO_PRODUCTS_QUERY = gql`{ productTag(tag: "rankingtwo") { _id, name, category, tag, price, description, rating, imageName }}`
const RANKTHREE_PRODUCTS_QUERY = gql`{ productTag(tag: "rankingthree") { _id, name, category, tag, price, description, rating, imageName }}`



const GraphQlProductRankingSection: React.FC<ProductCardType> = ({ title1, title2, title3 }) => {
    
    // Multiple queries. data: datatwo etc is OK!
    const { loading, error, data } = useQuery(RANKONE_PRODUCTS_QUERY)
    const { loading: loadingtwo, error: errortwo, data: datatwo } = useQuery(RANKTWO_PRODUCTS_QUERY)
    const { loading: loadingthree, error: errorthree, data: datathree } = useQuery(RANKTHREE_PRODUCTS_QUERY)
    if (loading) return <p>Laddar...</p>
    if (loadingtwo) return <p>Laddar...</p>
    if (loadingthree) return <p>Laddar...</p>
    if (error) return <p>Ett fel uppstod : {error.message}</p>;
    if (errortwo) return <p>Ett fel uppstod : {errortwo.message}</p>;
    if (errorthree) return <p>Ett fel uppstod : {errorthree.message}</p>;
    
    return (
        <section className="container-products-category-ranking">
            <div className="container">
                <div className="latest">
                    <h1>{title1}</h1>
                    {
                        data.productTag.map((product:any) => <GraphQlProductCardComponent key={product._id} item={product} />)
                    }
                </div>
                <div className="best">
                    <h1>{title2}</h1>
                    {
                        datatwo.productTag.map((product:any) => <GraphQlProductCardComponent key={product._id} item={product} />)
                    }
                </div>
                <div className="reacted">
                    <h1>{title3}</h1>
                    {
                        datathree.productTag.map((product:any) => <GraphQlProductCardComponent key={product._id} item={product} />)
                    }
                </div>
            </div>
            <div className="_border-bottom">
                <div className="_border"></div>
            </div>
        </section>
    );
};

export default GraphQlProductRankingSection;
