import { createContext, useContext, useState } from "react";
import ShoppingCartComponent from "../components/ShoppingCartComponent";


const ShoppingCartContext = createContext()


export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}



export const ShoppingCartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber) => {
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem) => {
        const { articleNumber, product } = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, product, quantity: 1 }]
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    // Customized from 'incrementQuantity'. function will add specified amount of items in detailsView.
    const incrementQuantityFromDetailed = (cartItem) => {
        const { articleNumber, product, count } = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, product, quantity: count }]
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity + count }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem) => {
        const { articleNumber } = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber).quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber) => {
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    const cartTotal = cartItems.reduce(
        (quantity, item) => item.product.price * item.quantity + quantity, 0
    )
    
    return <ShoppingCartContext.Provider value={{ cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem, incrementQuantityFromDetailed, cartTotal }}>
        {children}
        <ShoppingCartComponent />

    </ShoppingCartContext.Provider>

}