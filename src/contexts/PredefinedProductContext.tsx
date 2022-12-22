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
    getAll: () => void;
    getFeatured: (take?: number) => void;
    getFlashsaleOne: (take?: number) => void;
    getFlashsaleTwo: (take?: number) => void;
    getRankingOne: (take?: number) => void;
    getRankingTwo: (take?: number) => void;
    getRankingThree: (take?: number) => void;
};

export const ProductContext = createContext<ProductContextType | null>(null);
export const useProductContext = () => { return useContext(ProductContext) };

// THIS PREDEFINED DATABASE HAS NO DELETE, CREATE, UPDATE functions
const ProductProvider: React.FC<ProductProviderType> = ({ children }) => {
    const baseUrl: string = 'http://localhost:5000/api/predefinedproducts'
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
            const res = await fetch(`${baseUrl}/${articleNumber}`)
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
        let url = `${baseUrl}/flashone`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setFlashsaleOne(await res.json())
    }
    const getFlashsaleTwo = async (take: number = 0) => {
        let url = `${baseUrl}/flashtwo`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setFlashsaleTwo(await res.json())
    }
    const getRankingOne = async (take: number = 0) => {
        let url = `${baseUrl}/rankingone`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setRankingOne(await res.json())
    }
    const getRankingTwo = async (take: number = 0) => {
        let url = `${baseUrl}/rankingtwo`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setRankingTwo(await res.json())
    }
    const getRankingThree = async (take: number = 0) => {
        let url = `${baseUrl}/rankingthree`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setRankingThree(await res.json())
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
                getFlashsaleOne,
                getFlashsaleTwo,
                getRankingOne,
                getRankingTwo,
                getRankingThree
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider