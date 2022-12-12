import React, { createContext, useContext, useState } from 'react'
import { MongoProductItem, MongoProductRequest } from '../models/MongoProductModel'

interface MongoProviderType {
    children: any;
};

export interface MongoContextType {
    product: MongoProductItem;
    products: MongoProductItem[];
    featured: MongoProductItem[];
    flashsaleOne: MongoProductItem[];
    flashsaleTwo: MongoProductItem[];
    rankingOne: MongoProductItem[];
    rankingTwo: MongoProductItem[];
    rankingThree: MongoProductItem[];
    get: (articleNumber?: string) => void;
    getAll: () => void;
    getFeatured: (take?: number) => void;
    getFlashsaleOne: (take?: number) => void;
    getFlashsaleTwo: (take?: number) => void;
    getRankingOne: (take?: number) => void;
    getRankingTwo: (take?: number) => void;
    getRankingThree: (take?: number) => void;
    remove: (articleNumber?: string) => void;
    setMongoProductRequest: React.Dispatch<React.SetStateAction<MongoProductRequest>>;
    create: (e: React.FormEvent) => void;
    mongoProductRequest: MongoProductRequest;
    update: (e: React.FormEvent) => void;
    setProduct: React.Dispatch<React.SetStateAction<MongoProductItem>>;
};

export const MongoContext = createContext<MongoContextType | null>(null);
export const useMongoContext = () => { return useContext(MongoContext) };


const MongoProvider: React.FC<MongoProviderType> = ({ children }) => {
    const baseUrl: string = 'http://localhost:5000/api/mongoproducts'
    const empty_product: MongoProductItem = { articleNumber: '', name: '', description: '', category: '', tag: '', price: 0, rating: 0, imageName: '' }

    const [product, setProduct] = useState<MongoProductItem>(empty_product)
    const [products, setProducts] = useState<MongoProductItem[]>([])
    const [featured, setFeatured] = useState<MongoProductItem[]>([])
    const [flashsaleOne, setFlashsaleOne] = useState<MongoProductItem[]>([])
    const [flashsaleTwo, setFlashsaleTwo] = useState<MongoProductItem[]>([])
    const [rankingOne, setRankingOne] = useState<MongoProductItem[]>([])
    const [rankingTwo, setRankingTwo] = useState<MongoProductItem[]>([])
    const [rankingThree, setRankingThree] = useState<MongoProductItem[]>([])
    
    
    const mongoProductRequest_default: MongoProductRequest = {
        articleNumber: "",
        name: "",
        description: "",
        category: "",
        tag: "",
        price: 0,
        rating: 0,
        imageName: ""
    };

    const [mongoProductRequest, setMongoProductRequest] = useState<MongoProductRequest>(mongoProductRequest_default);



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

    const remove = async (articleNumber?: string) => {
        const result = await fetch(`${baseUrl}/${articleNumber}`, { method: "delete" });

        if (result.status === 204) {
            setProduct(empty_product);
        }
    };

    const create = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await fetch(`${baseUrl}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mongoProductRequest),
        });

        if (result.status === 201) {
            setMongoProductRequest(mongoProductRequest_default);
        }
    };

    const update = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await fetch(`${baseUrl}/update/${product.articleNumber}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        if (result.status === 200) {
            setProduct(await result.json());
        }
    };

    return (
        <MongoContext.Provider
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
                getRankingThree,
                remove,
                create,
                mongoProductRequest,
                setMongoProductRequest,
                update,
                setProduct
            }}>
            {children}
        </MongoContext.Provider>
    )
}

export default MongoProvider