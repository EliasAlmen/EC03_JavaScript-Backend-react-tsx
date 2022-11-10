import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/shoppingCartContext'
import { currencyFormatter } from '../utils/currencyFormatter'

const ProductCardComponent = ({ item }) => {

    const { incrementQuantity } = useShoppingCart()

    return (
        <div className="card-product">
            <div className="img-container">
                <div className="quick-menu">
                    <button className="nav-icon"><i title="magnifying glass" className="fa-regular fa-magnifying-glass"></i></button>
                    <button className="nav-icon"><i title="compare" className="fa-regular fa-code-compare"></i></button>
                    <button onClick={() => incrementQuantity({ articleNumber: item.articleNumber, product: item })} title="Shopping" className="nav-icon"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <div className="quick-view">
                    <NavLink to={`/products/${item.articleNumber}`} className="button btn-hover bg-red">QUICK VIEW</NavLink>
                </div>
                <img src={item.imageName} alt={item.name} />
            </div>
            <div className="text">
                <h5>{item.category}</h5>
                <h6>{item.name}</h6>
                <span>
                    {/* OLD CODE for when I had randomly ratings */}
                    {/* {products.rating.map(product => <i key={i} className="fa-sharp fa-solid fa-star"></i>)} */}

                    {/* https://stackoverflow.com/questions/50898165/react-render-a-certain-number-of-components-dynamically */}
                    {/* Shamelessly taken from stackoverflow. */}
                    {/* Creates an array with value from item.rating, fills array with 0 and then fills it with stars. _underscore for ESlint warning.    */}
                    {Array(item.rating).fill(0).map((_, i) => <i key={i} className="fa-sharp fa-solid fa-star"></i>)}
                </span>
                <div className="bothPrices">
                    {/* OLD CODE Line below was for randomly generated bool(true/false) for product to have offprice or not */}
                    {/* <p className={offPriceOnItem ? "firstPrice" : ""}>${product.price}.00</p> */}
                    {/* <span className={offPriceOnItem ? "offPrice" : ""}>{`${offPriceOnItem ? product.offPrice : ""}`}</span> */}

                    {/* API did not contain any offprice in JSON. */}
                    <p>{currencyFormatter(item.price)}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCardComponent