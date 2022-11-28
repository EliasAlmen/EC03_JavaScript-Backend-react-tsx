import React, { useState } from "react";
import {
  CrudProductContext,
  ICrudProductContext,
} from "../contexts/CrudContext";

const CrudCreate: React.FC = () => {
  const { crudProductRequest, setCrudProductRequest, create } =
    React.useContext(CrudProductContext) as ICrudProductContext;

  const [currentRating, setCurrentRating] = useState("0");
  const ratings = [
    {
        id: "0",
        ratingTitle: "0",
      },
    {
      id: "1",
      ratingTitle: "1",
    },
    {
      id: "2",
      ratingTitle: "2",
    },
    {
      id: "3",
      ratingTitle: "3",
    },
    {
      id: "4",
      ratingTitle: "4",
    },
    {
        id: "5",
        ratingTitle: "5",
      }
  ];

  const handleRatingClick = (e: any) => {
    setCurrentRating(e.target.id);
    setCrudProductRequest({
        ...crudProductRequest,
        rating: e.target.value,
      })
  };

  return (
    <form onSubmit={create} className="create form-group">
      <label htmlFor="name" className="form-label h3 fw-bold">
        Add
      </label>
      <input
        value={crudProductRequest.name}
        onChange={(e) =>
          setCrudProductRequest({ ...crudProductRequest, name: e.target.value })
        }
        type="text"
        name="name"
        className="form-control"
        placeholder="Name..."
      />
      <input
        value={crudProductRequest.category}
        onChange={(e) =>
          setCrudProductRequest({
            ...crudProductRequest,
            category: e.target.value,
          })
        }
        className="form-control"
        list="categories"
        placeholder="Choose an category"
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
      />
      <input
        value={crudProductRequest.price}
        onChange={(e) =>
          setCrudProductRequest({
            ...crudProductRequest,
            price: parseInt(e.target.value),
          })
        }
        type="text"
        name="price"
        className="form-control"
        placeholder="Price..."
      />
      <input
        value={crudProductRequest.rating}
        onChange={(e) =>
          setCrudProductRequest({
            ...crudProductRequest,
            rating: parseInt(e.target.value),
          })
        }
        type="text"
        name="rating"
        className="form-control"
        list="rating"
      />
      <div className="rating-choose">
        Size:
        <span>
          {ratings.map((rating, i) => (
            <button
              key={i}
              id={rating.id}
              disabled={currentRating === `${rating.id}`}
              onClick={handleRatingClick}
            >
              {rating.ratingTitle}
            </button>
          ))}
        </span>
      </div>
      <button className="button bg-red btn-sm py-2 mt-3">
        Publish product
      </button>
    </form>
  );
};

export default CrudCreate;
