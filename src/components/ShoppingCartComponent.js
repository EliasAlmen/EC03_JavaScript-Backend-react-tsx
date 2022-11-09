import React from 'react'
import { useShoppingCart } from '../contexts/shoppingCartContext'
import { currencyFormatter } from '../utils/currencyFormatter'
import ShoppingCartItemComponent from './ShoppingCartItemComponent'

const ShoppingCartComponent = () => {
    const {cartItems, cartTotal} = useShoppingCart()

    return (
        <div className="shoppingcart offcanvas offcanvas-end" tabIndex="-1" id="shoppingCart" aria-labelledby="shoppingCartLabel">
            <div className="offcanvas-header">
                <h4 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-bag-shopping me-3"></i>Shopping Cart</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {cartItems.map(item => (<ShoppingCartItemComponent key={item.articleNumber} item={item} />))}

                <div className="checkout mt-5">
                    <div className="total my-2">Total:<span className="ms-2">{currencyFormatter(cartTotal)}</span></div>
                    <button className="button bg-red">Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartComponent