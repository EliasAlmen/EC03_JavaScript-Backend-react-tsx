import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const GraphQlUpdateComponent: React.FC = () => {

    const { id } = useParams();
    // Query for specific product based on useParams
    const GET_DETAILS_QUERY = gql`{ productGraphQL(id:"${id}") { _id, name, category, tag, price, description, rating, imageName }}`

    const UPDATE_PRODUCT_QUERY = gql`
    mutation($id: ID!, $setName: String!, $setCategory: String!, $setTag: String!, $setPrice: String!, $setDescription: String!, $setRating: String!, $setImageName: String!) 
    { updateProduct(
        id: $id,
        name: $setName,
        category: $setCategory,
        tag: $setTag,
        price: $setPrice,
        description: $setDescription,
        rating: $setRating,
        imageName: $setImageName
        ) {
        _id
        name
        category
        tag
        price
        description
        rating
        imageName
    }}`;
    


    const { loading, error, data } = useQuery(GET_DETAILS_QUERY)
    const [updateGraphQLProduct] = useMutation(UPDATE_PRODUCT_QUERY)

    // For some reason, i cant put data.productGraphQL.name etc in useState as default value. 
    // My update solution still needs work..
    const [inputName, setInputName] = useState("")
    const [inputCategory, setInputCategory] = useState("")
    const [inputTag, setInputTag] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputDescription, setInputDescription] = useState("")
    const [inputRating, setInputRating] = useState("")
    const [inputImageName, setInputImageName] = useState("")

    
    if (loading) return <p>Laddar...</p>
    if (error) return <p>Ett fel uppstod : {error.message}</p>

    return (
        <>
            <form onSubmit={e => {
                e.preventDefault()
                //call mutation
                updateGraphQLProduct({
                    variables: {
                        id: id,
                        setName: inputName,
                        setCategory: inputCategory,
                        setTag: inputTag,
                        setPrice: inputPrice,
                        setDescription: inputDescription,
                        setRating: inputRating,
                        setImageName: inputImageName,
                    }
                })
            }}
                className="create form-group">
                <label htmlFor="name" className="form-label h3">
                    Update
                </label>
                <h6>Temporary solution -&gt; copy value and paste in field. See code for comments.</h6>
                <input
                    defaultValue={data.productGraphQL.name}
                    // All onchange inside input refer to mutation refs.
                    onChange={e => (
                        setInputName(e.target.value)
                    )}
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name..."
                    required
                    minLength={3}
                />
                <input
                    defaultValue={data.productGraphQL.category}
                    onChange={e => (
                        setInputCategory(e.target.value)
                    )}
                    type="text"
                    name="category"
                    className="form-control"
                    placeholder="Category..."
                    required
                    minLength={3}
                />
                <input
                    defaultValue={data.productGraphQL.description}
                    onChange={e => (
                        setInputDescription(e.target.value)
                    )}
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Description..."
                    required
                    minLength={3}
                />
                <input
                    defaultValue={data.productGraphQL.tag}
                    onChange={e => (
                        setInputTag(e.target.value)
                    )}
                    type="text"
                    name="tag"
                    className="form-control"
                    placeholder="Tag..."
                    required
                    minLength={3}
                />
                <input
                    defaultValue={data.productGraphQL.price}
                    onChange={e => (
                        setInputPrice(e.target.value)
                    )}
                    type="text"
                    name="price"
                    className="form-control"
                    placeholder="Price..."
                    required
                    minLength={1}
                />
                <input
                    defaultValue={data.productGraphQL.rating}
                    onChange={e => (
                        setInputRating(e.target.value)
                    )}
                    type="text"
                    name="rating"
                    className="form-control"
                    placeholder="Choose a rating..."
                    required
                    minLength={1}
                />
                <input
                    defaultValue={data.productGraphQL.imageName}
                    onChange={e => (
                        setInputImageName(e.target.value)
                    )}
                    type="text"
                    name="imageName"
                    className="form-control"
                    placeholder="Image url..."
                    required
                    minLength={3}
                />
                <button type='submit' className="btn btn-primary btn-sm py-2 mt-3">
                    Update product
                </button>
            </form>
        </>

    )
}

export default GraphQlUpdateComponent