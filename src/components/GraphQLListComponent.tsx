import React from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'
import { NavLink } from 'react-router-dom'
import { currencyFormatter } from '../utils/currencyFormatter'

const GET_PRODUCTS_QUERY = gql`{ productsGraphQL { _id, name, category, tag, price, description, rating, imageName }}`


const GraphQLListComponent = () => {

    // Query to delete product
    const REMOVE_PRODUCT_QUERY = gql`
    mutation($id: ID!) { removeProduct(id: $id) {
        _id
        name
    }}`;

    const [deleteGraphQLProduct] = useMutation(REMOVE_PRODUCT_QUERY)
    

    const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY)
    if (loading) return <p>Laddar...</p>
    if (error) return <p>Ett fel uppstod : {error.message}</p>;


    return (
        <>
            <div className="featured">
                <div className="container-cards">
                    {data.productsGraphQL.map((product: any) => (
                        <React.Fragment key={product._id}>
                            <div className="card-product">
                                <div className="img-container">
                                    <div className="quick-menu">
                                        <NavLink
                                            className="linkUpdate nav-icon"
                                            to={`/graphql/update/${product._id}`}
                                        >
                                            <i className="fa-regular fa-gears"></i>
                                        </NavLink>
                                        <div
                                            className="removeItem nav-icon"
                                            onClick={e => {
                                                deleteGraphQLProduct({
                                                    variables: { id: product._id },
                                                    //REFETCH TO UPDATE LIST
                                                refetchQueries: [{query: GET_PRODUCTS_QUERY}]})
                                            }}
                                        >
                                            <i className="fa-regular fa-trash"></i>
                                        </div>
                                    </div>
                                    <div className="quick-view">
                                        <NavLink
                                            to={`/graphql/${product._id}`}
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
                                        {Array(parseInt(product.rating))
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
    )
}

export default GraphQLListComponent