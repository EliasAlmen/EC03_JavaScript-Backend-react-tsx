import React, { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCartComponent from "../components/ShoppingCartComponent";


interface IShoppingCartProvider {
    children: ReactNode;
}

interface ICartItemProp {
    quantity: number;
    articleNumber: string;
    product: any;
    item?: any;
    items?: any;
    count?: any;
}

interface IShoppingCartProductContext {
    cartQuantity: number;
    getItemQuantity: (articleNumber: string) => void;
    incrementQuantity: (item: any) => void;
    incrementQuantityFromDetailed: (item: any, setCount: any) => void;
    decrementQuantity: (item: any) => void;
    removeItem: (item: any) => void;
    removeAllItem: () => void;
    cartItems: ICartItemProp[];
    cartTotal: number;
}

const ShoppingCartContext = createContext({} as IShoppingCartProductContext)
//const ShoppingCartContext = createContext<IShoppingCartProductContext | null>(null)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider: React.FC<IShoppingCartProvider> = ({ children }) => {

    const [cartItems, setCartItems] = useState<ICartItemProp[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: string) => {
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: ICartItemProp) => {
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
    const incrementQuantityFromDetailed = (cartItem: ICartItemProp) => {
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

    const decrementQuantity = (cartItem: ICartItemProp) => {
        const { articleNumber } = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber)?.quantity === 1) {
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