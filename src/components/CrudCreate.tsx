import React from "react";
import {
  CrudProductContext,
  ICrudProductContext,
} from "../contexts/CrudContext";

const CrudCreate: React.FC = () => {
  const { crudProductRequest, setCrudProductRequest, create } =
    React.useContext(CrudProductContext) as ICrudProductContext;

  function generateRandomPrice() {
    var min = 1;
    var max = 999;
    let randomNumber;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  function generateRandomRating() {
    var min = 1;
    var max = 5;
    let randomNumber;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  function generateRandomCategory() {
    var categories = [
      "Coats",
      "Dresses",
      "Sets",
      "Jackets",
      "T-shirts",
      "Sweaters",
      "Watches",
      "Shoes",
      "Jeans",
      "Bags",
      "Tops",
      "Pants",
    ];
    const randomNumber = Math.floor(Math.random() * categories.length);
    return categories[randomNumber];
  }

  function generateRandomName() {
    var categories = [
      "Black coat",
      "Black dress",
      "Brown watch",
      "Stiletto shoes",
      "Winter boots",
      "Red dress",
      "Black top & pants set",
      "White top & black pants set",
      "Blue hoody & pants",
      "Jeans jacket & pants",
      "Jeans dress",
      "Blue jacket",
      "Purple handbag",
      "Red handbag",
      "Blue t-shirt",
      "Gray t-shirt",
      "Multicolor t-shirt",
      "Striped top",
      "Brown sweater",
      "Olive sweater",
      "White seater",
      "Striped pink pants",
    ];
    const randomNumber = Math.floor(Math.random() * categories.length);
    return categories[randomNumber];
  }
  function generateRandomDescription() {
    var categories = [
      "Black",
      "Blue",
      "Green",
      "Red",
      "Yellow",
      "Purple",
      "White",
      "Grey",
      "Pink",
      "Gold",
      "Silver",
      "Copper",
      "Silk",
      "Thick",
      "Thinn",
    ];
    const randomNumber = Math.floor(Math.random() * categories.length);
    return categories[randomNumber];
  }

  return (
    <>
      <form onSubmit={create} className="create form-group">
        <label htmlFor="name" className="form-label h3 fw-bold">
          Add
        </label>
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
        <button className="button bg-red btn-sm py-2 mt-3">
          Publish product
        </button>
      </form>
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
              description: generateRandomDescription(),
            })
          }
        >
          <i className="fa-regular fa-dice"></i>
        </button>
      </div>
    </>
  );
};

export default CrudCreate;
