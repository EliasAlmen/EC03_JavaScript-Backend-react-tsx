import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MongoContextType, useMongoContext } from "../contexts/MongoContext";

const MongoUpdateComponent: React.FC = () => {
    const { id } = useParams();

    // const { product, setProduct, get, update } = React.useContext(
    //     CrudProductContext
    // ) as ICrudProductContext;

    const {
        getForUpdate,
        update,
        product,
        setProduct
    } = useMongoContext() as MongoContextType

    useEffect(() => {
        getForUpdate(id);
    }, [setProduct]);

    return (
        <form onSubmit={update} className="create form-group">
            <label htmlFor="name" className="form-label h3">
                Update
            </label>
            <input type="hidden" value={product.articleNumber} />
            <input
                value={product.name}
                onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                }
                type="text"
                name="name"
                className="form-control"
                placeholder="Name..."
            />
            <input
                value={product.category}
                onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                }
                type="text"
                name="category"
                className="form-control"
                placeholder="Category..."
            />
            <input
                value={product.description}
                onChange={(e) =>
                    setProduct({
                        ...product,
                        description: e.target.value,
                    })
                }
                type="text"
                name="description"
                className="form-control"
                placeholder="Description..."
            />
            <input
                value={product.tag}
                onChange={(e) =>
                    setProduct({
                        ...product,
                        tag: e.target.value,
                    })
                }
                type="text"
                name="tag"
                className="form-control"
                placeholder="Tag..."
            />
            <input
                value={product.price}
                onChange={(e) =>
                    setProduct({
                        ...product,
                        price: parseInt(e.target.value),
                    })
                }
                type="text"
                name="price"
                className="form-control"
                placeholder="Price..."
            />
            <input
                value={product.rating}
                onChange={(e) =>
                    setProduct({
                        ...product,
                        rating: parseInt(e.target.value),
                    })
                }
                type="text"
                name="rating"
                className="form-control"
                placeholder="Choose a rating..."
            />
            <input
                value={product.imageName}
                onChange={(e) =>
                    setProduct({
                        ...product,
                        imageName: e.target.value,
                    })
                }
                type="text"
                name="imageName"
                className="form-control"
                placeholder="Image url..."
            />
            <button className="btn btn-primary btn-sm py-2 mt-3">
                Update product
            </button>
        </form>
    );
};

export default MongoUpdateComponent;
