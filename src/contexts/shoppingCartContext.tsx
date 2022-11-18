import React, { createContext, useContext, useState } from "react";
import ShoppingCartComponent from "../components/ShoppingCartComponent";
import { Props } from "../interfaces/ProductCardInterface";

// interface ICartItem {
//     quantity: number;
//     articleNumber?: string;
//     product?: any;
// }

interface IShoppingCartProvider {
    children: any;
}

export interface IShoppingCartContext {
    getItemQuantity: (articleNumber: string) => void;
    incrementQuantity: (cartItem: any) => any;
    decrementQuantity: (cartItem: any) => any;
    removeAllItem: () => void;
    removeItem: (articleNumber: any) => void;
    cartItems: any;
    cartQuantity: any;
    incrementQuantityFromDetailed: (cartItem: any) => any;
    cartTotal: any;
}

export const ShoppingCartContext = createContext<IShoppingCartContext | null>(null)


export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}



export const ShoppingCartProvider:React.FC<IShoppingCartProvider> = ({ children }) => {

    const [cartItems, setCartItems] = useState<Props[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: string) => {
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: { articleNumber: string; product: any; }) => {
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
    const incrementQuantityFromDetailed = (cartItem: { articleNumber: string; product: any; count: number; }) => {
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

    const decrementQuantity = (cartItem: { articleNumber: string; }) => {
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

    const removeItem = (articleNumber: string) => {
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    const removeAllItem = () => {
        setCartItems([])
    }
 
    const cartTotal = cartItems.reduce(
        (quantity, item) => item.product.price * item.quantity + quantity, 0
    )
    
    return <ShoppingCartContext.Provider value={{ cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem, incrementQuantityFromDetailed, cartTotal, removeAllItem }}>
        {children}
        <ShoppingCartComponent />

    </ShoppingCartContext.Provider>

}