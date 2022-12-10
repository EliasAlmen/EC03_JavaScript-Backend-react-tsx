import React from 'react'
import { MongoContextType, useMongoContext } from "../contexts/MongoContext";
import {
    generateRandomRating,
    generateRandomCategory,
    generateRandomDescription,
    generateRandomName,
    generateRandomPrice
} from '../utils/randomProductGenerator'

const MongoCreateComponent = () => {
    // const { mongoProductRequest, setMongoProductRequest, create } =
    //     React.useContext(MongoProductContext) as IMongoProductContext;
  
    const {
        create,
        setMongoProductRequest,
        mongoProductRequest
        
    } = useMongoContext() as MongoContextType

    return (
      <>
          <div className="container">
              <div className="form-label h3 fw-bold">Add product</div>
              <form onSubmit={create} className="create form-group">
                  <div className="input-container d-flex">
                      <input
                          value={mongoProductRequest.name}
                          onChange={(e) =>
                              setMongoProductRequest({
                                  ...mongoProductRequest,
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
                          value={mongoProductRequest.category}
                          onChange={(e) =>
                              setMongoProductRequest({
                                  ...mongoProductRequest,
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
                          value={mongoProductRequest.description}
                          onChange={(e) =>
                              setMongoProductRequest({
                                  ...mongoProductRequest,
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
                          value={mongoProductRequest.price || ""}
                          onChange={(e) =>
                              setMongoProductRequest({
                                  ...mongoProductRequest,
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
                          value={mongoProductRequest.rating || ""}
                          onChange={(e) =>
                              setMongoProductRequest({
                                  ...mongoProductRequest,
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
                                  setMongoProductRequest({
                                      ...mongoProductRequest,
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
  )
}

export default MongoCreateComponent