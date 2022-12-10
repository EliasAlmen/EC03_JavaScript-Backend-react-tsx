import React from "react";
import {
    CrudProductContext,
    ICrudProductContext,
} from "../contexts/CrudContext";
import {
    generateRandomRating,
    generateRandomCategory,
    generateRandomDescription,
    generateRandomName,
    generateRandomPrice
} from '../utils/randomProductGenerator'

const CrudCreate: React.FC = () => {
    const { crudProductRequest, setCrudProductRequest, create } =
        React.useContext(CrudProductContext) as ICrudProductContext;

    // function valditeField(this: any) {
    //     // check for letters, at least 3
    //     if (typeof this.value !== 'string') {
    //         this.setAttribute('aria-invalid', 'true');
    //         alert(
    //             'You entered an invalid value. Only text characters are allowed'
    //         );
    //     }
    // }

    return (
        <>
            <div className="container">
                <div className="form-label h3 fw-bold">Add product</div>
                <form onSubmit={create} className="create form-group">
                    <div className="input-container d-flex">
                        <input
                            value={crudProductRequest.name}
                            onChange={(e) =>
                                setCrudProductRequest({
                                    ...crudProductRequest,
                                    name: e.target.value,
                                })
                            }
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name..."
                            required
                            minLength={3}
                        />
                        <input
                            value={crudProductRequest.category}
                            onChange={(e) =>
                                setCrudProductRequest({
                                    ...crudProductRequest,
                                    category: e.target.value,
                                })
                            }
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
                            value={crudProductRequest.description}
                            onChange={(e) =>
                                setCrudProductRequest({
                                    ...crudProductRequest,
                                    description: e.target.value,
                                })
                            }
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Description..."
                            required
                            minLength={3}
                        />
                        <input
                            value={crudProductRequest.price || ""}
                            onChange={(e) =>
                                setCrudProductRequest({
                                    ...crudProductRequest,
                                    price: parseInt(e.target.value),
                                })
                            }
                            type="number"
                            name="price"
                            className="form-control"
                            placeholder="Price..."
                            required
                        />
                        <input
                            value={crudProductRequest.rating || ""}
                            onChange={(e) =>
                                setCrudProductRequest({
                                    ...crudProductRequest,
                                    rating: parseInt(e.target.value),
                                })
                            }
                            type="number"
                            name="rating"
                            className="form-control"
                            list="rating"
                            placeholder="Rating..."
                            required
                            min={0}
                            max={5}
                        />
                    </div>
                    <div className="button-container d-flex justify-content-center">
                        <button className="button bg-red py-2 mt-3">
                            Publish product
                        </button>
                        <div className="random-container">
                            <button
                                type="button"
                                className="btn random btn-light py-2 mt-3"
                                onClick={(e) =>
                                    setCrudProductRequest({
                                        ...crudProductRequest,
                                        rating: generateRandomRating(),
                                        price: generateRandomPrice(),
                                        category: generateRandomCategory(),
                                        name: generateRandomName(),
                                        description:
                                            generateRandomDescription(),
                                    })
                                }
                            >
                                <i className="fa-regular fa-dice"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CrudCreate;
