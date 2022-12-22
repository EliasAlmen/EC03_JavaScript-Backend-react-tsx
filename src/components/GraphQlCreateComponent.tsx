import { gql, useMutation} from '@apollo/client';
import React, { useState } from 'react'

const GraphQlCreateComponent: React.FC = () => {

    // This query will create one product
    const CREATE_PRODUCT_QUERY = gql`
    mutation($setName: String!, $setCategory: String!, $setTag: String!, $setPrice: String!, $setDescription: String!, $setRating: String!, $setImageName: String!) 
    { addProduct(
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
    // USE MUTATION
    const [addProduct] = useMutation(CREATE_PRODUCT_QUERY)
    
    const [inputName, setInputName] = useState("")
    const [inputCategory, setInputCategory] = useState("")
    const [inputTag, setInputTag] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputDescription, setInputDescription] = useState("")
    const [inputRating, setInputRating] = useState("")
    const [inputImageName, setInputImageName] = useState("")


    return (
        <>
            <div className="container">
                <div className="form-label h3 fw-bold">Add product (doesnt clear form after button press. Refresh to update list.)</div>
                <form onSubmit={e => {
                    e.preventDefault()
                    //call mutation
                    addProduct({
                        variables: {
                            setName: inputName,
                            setCategory: inputCategory,
                            setTag: inputTag,
                            setPrice: inputPrice,
                            setDescription: inputDescription,
                            setRating: inputRating,
                            setImageName: inputImageName,
                        }
                    })
                }} className="create form-group">
                    <div className="input-container d-flex">
                        <input
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
                            onChange={e => (
                                setInputCategory(e.target.value)
                            )}
                            className="form-control "
                            list="categories"
                            placeholder="Choose an category"
                            required
                            minLength={3}
                        />
                        <datalist id="categories">
                            <option>Coats</option>
                            <option>Dresses</option>
                            <option>Sets</option>
                            <option>Jackets</option>
                            <option>T-shirts</option>
                            <option>Sweaters</option>
                            <option>Watches</option>
                            <option>Shoes</option>
                            <option>Jeans</option>
                            <option>Bags</option>
                            <option>Tops</option>
                            <option>Pants</option>
                        </datalist>
                        <input
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
                            onChange={e => (
                                setInputPrice(e.target.value)
                            )}
                            type="text"
                            name="price"
                            className="form-control"
                            placeholder="Price..."
                            required
                            min={0}
                        />
                        <input
                            onChange={e => (
                                setInputRating(e.target.value)
                            )}
                            type="text"
                            name="rating"
                            className="form-control"
                            list="rating"
                            placeholder="Rating..."
                            required
                            min={0}
                            max={5}
                        />
                        <input
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
                    </div>
                    <div className="button-container d-flex justify-content-center">
                        <button className="button bg-red py-2 mt-3">
                            Publish product
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GraphQlCreateComponent