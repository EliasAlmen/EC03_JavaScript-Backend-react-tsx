import React, { createContext, useContext, useState } from 'react'
import { MongoProductItem, MongoProductRequest } from '../models/MongoProductModel'

interface MongoProviderType {
    children: any;
};

export interface MongoContextType {
    product: MongoProductItem;
    products: MongoProductItem[];
    mongoFeatured: MongoProductItem[];
    mongoFlashsaleOne: MongoProductItem[];
    mongoFlashsaleTwo: MongoProductItem[];
    mongoRankingOne: MongoProductItem[];
    mongoRankingTwo: MongoProductItem[];
    mongoRankingThree: MongoProductItem[];
    get: (articleNumber?: string) => void;
    getAll: () => void;
    getForUpdate: (articleNumber?: string) => void;
    mongoGetFeatured: (take?: number) => void;
    mongoGetFlashsaleOne: (take?: number) => void;
    mongoGetFlashsaleTwo: (take?: number) => void;
    mongoGetRankingOne: (take?: number) => void;
    mongoGetRankingTwo: (take?: number) => void;
    mongoGetRankingThree: (take?: number) => void;
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
    const [mongoFeatured, mongoSetFeatured] = useState<MongoProductItem[]>([])
    const [mongoFlashsaleOne, mongoSetFlashsaleOne] = useState<MongoProductItem[]>([])
    const [mongoFlashsaleTwo, mongoSetFlashsaleTwo] = useState<MongoProductItem[]>([])
    const [mongoRankingOne, mongoSetRankingOne] = useState<MongoProductItem[]>([])
    const [mongoRankingTwo, mongoSetRankingTwo] = useState<MongoProductItem[]>([])
    const [mongoRankingThree, mongoSetRankingThree] = useState<MongoProductItem[]>([])
    
    
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
    const getForUpdate = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/mongo/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }
    const mongoGetFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        mongoSetFeatured(await res.json())
    }
    const mongoGetFlashsaleOne = async (take: number = 0) => {
        let url = `${baseUrl}/flashone`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        mongoSetFlashsaleOne(await res.json())
    }
    const mongoGetFlashsaleTwo = async (take: number = 0) => {
        let url = `${baseUrl}/flashtwo`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        mongoSetFlashsaleTwo(await res.json())
    }
    const mongoGetRankingOne = async (take: number = 0) => {
        let url = `${baseUrl}/rankingone`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        mongoSetRankingOne(await res.json())
    }
    const mongoGetRankingTwo = async (take: number = 0) => {
        let url = `${baseUrl}/rankingtwo`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        mongoSetRankingTwo(await res.json())
    }
    const mongoGetRankingThree = async (take: number = 0) => {
        let url = `${baseUrl}/rankingthree`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        mongoSetRankingThree(await res.json())
    }

    const remove = async (articleNumber?: string) => {
        const result = await fetch(`${baseUrl}/${articleNumber}`, {
            method: "delete",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        });

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
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(mongoProductRequest),
        });

        if (result.status === 201) {
            setMongoProductRequest(mongoProductRequest_default);
        }
    };

    const update = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(product);
        
        const result = await fetch(`${baseUrl}/mongo/update/${product.articleNumber}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
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
                mongoFeatured,
                mongoFlashsaleOne,
                mongoFlashsaleTwo,
                mongoRankingOne,
                mongoRankingTwo,
                mongoRankingThree,
                get,
                getAll,
                getForUpdate,
                mongoGetFeatured,
                mongoGetFlashsaleOne,
                mongoGetFlashsaleTwo,
                mongoGetRankingOne,
                mongoGetRankingTwo,
                mongoGetRankingThree,
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