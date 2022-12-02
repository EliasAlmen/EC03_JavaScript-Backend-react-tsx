import React, { createContext, useContext, useState } from 'react'
import { ProductItem } from '../models/PredefinedProductModel'

interface ProductProviderType {
    children: any;
};

export interface ProductContextType {
    product: ProductItem;
    products: ProductItem[];
    featured: ProductItem[];
    flashsaleOne: ProductItem[];
    flashsaleTwo: ProductItem[];
    rankingOne: ProductItem[];
    rankingTwo: ProductItem[];
    rankingThree: ProductItem[];
    get: (articleNumber?: string) => void;
    getAll: (take?: number) => void;
    getFeatured: (take?: number) => void;
    getFlashsaleOne: (take?: number) => void;
};

export const ProductContext = createContext<ProductContextType | null>(null);
export const usePRoductContext = () => { return useContext(ProductContext) };


const ProductProvider: React.FC<ProductProviderType> = ({ children }) => {
    const baseUrl: string = 'http://localhost:5000/api/products'
    const empty_product: ProductItem = { tag: '', articleNumber: '', name: '', description: '', category: '', price: 0, rating: 0, imageName: '' }

    const [product, setProduct] = useState<ProductItem>(empty_product)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featured, setFeatured] = useState<ProductItem[]>([])
    const [flashsaleOne, setFlashsaleOne] = useState<ProductItem[]>([])
    const [flashsaleTwo, setFlashsaleTwo] = useState<ProductItem[]>([])
    const [rankingOne, setRankingOne] = useState<ProductItem[]>([])
    const [rankingTwo, setRankingTwo] = useState<ProductItem[]>([])
    const [rankingThree, setRankingThree] = useState<ProductItem[]>([])

    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAll = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setFeatured(await res.json())
    }
    const getFlashsaleOne = async (take: number = 0) => {
        let url = `${baseUrl}/featured`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setFlashsaleOne(await res.json())
    }

    return (
        <ProductContext.Provider
            value={{
                product,
                products,
                featured,
                flashsaleOne,
                flashsaleTwo,
                rankingOne,
                rankingTwo,
                rankingThree,
                get,
                getAll,
                getFeatured,
                getFlashsaleOne
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider