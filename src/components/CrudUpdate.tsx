import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    CrudProductContext,
    ICrudProductContext,
} from "../contexts/CrudContext";

const CrudUpdate = () => {
    const { id } = useParams();

    const { crudProduct, setCrudProduct, get, update } = React.useContext(
        CrudProductContext
    ) as ICrudProductContext;

    useEffect(() => {
        get(Number(id));
    }, [setCrudProduct]);

    return (
        <form onSubmit={update} className="create form-group">
            <label htmlFor="name" className="form-label h3">
                Update
            </label>
            <input type="hidden" value={crudProduct.id} />
            <input
                value={crudProduct.name}
                onChange={(e) =>
                    setCrudProduct({ ...crudProduct, name: e.target.value })
                }
                type="text"
                name="name"
                className="form-control"
                placeholder="Name..."
            />
            <input
                value={crudProduct.category}
                onChange={(e) =>
                    setCrudProduct({ ...crudProduct, category: e.target.value })
                }
                type="text"
                name="category"
                className="form-control"
                placeholder="Category..."
            />
            <input
                value={crudProduct.description}
                onChange={(e) =>
                    setCrudProduct({
                        ...crudProduct,
                        description: e.target.value,
                    })
                }
                type="text"
                name="description"
                className="form-control"
                placeholder="Description..."
            />
            <input
                value={crudProduct.price}
                onChange={(e) =>
                    setCrudProduct({
                        ...crudProduct,
                        price: parseInt(e.target.value),
                    })
                }
                type="text"
                name="price"
                className="form-control"
                placeholder="Price..."
            />
            <input
                value={crudProduct.rating}
                onChange={(e) =>
                    setCrudProduct({
                        ...crudProduct,
                        rating: parseInt(e.target.value),
                    })
                }
                type="text"
                name="rating"
                className="form-control"
                placeholder="Choose a rating..."
            />
            <button className="btn btn-primary btn-sm py-2 mt-3">
                Update product
            </button>
        </form>
    );
};

export default CrudUpdate;
