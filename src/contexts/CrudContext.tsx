import React, { createContext, useContext, useState } from "react";
import { CrudProduct, CrudProductRequest } from "../models/CrudModel";
import { CrudProviderProps } from "../models/CrudProductProviderPropsModel";

export interface ICrudProductContext {
    crudProduct: CrudProduct;
    setCrudProduct: React.Dispatch<React.SetStateAction<CrudProduct>>;
    crudProductRequest: CrudProductRequest;
    setCrudProductRequest: React.Dispatch<React.SetStateAction<CrudProductRequest>>;
    crudProducts: CrudProduct[];
    create: (e: React.FormEvent) => void;
    get: (id: number) => void;
    getAll: () => void; //funktionen har ej return så den kan vara tom.
    update: (e: React.FormEvent) => void;
    remove: (id: number) => void;
}

export const CrudProductContext = createContext<ICrudProductContext | null>(null);
export const useCrudProductContext = () => {
    return useContext(CrudProductContext);
};

const CrudProvider = ({ children }: CrudProviderProps) => {
    const baseUrl = "http://localhost:5000/api/products";

    const crudProduct_default: CrudProduct = {
        id: 0,
        name: "",
        description: "",
        category: "",
        price: 0,
        rating: 0,
        imageName: "",
    };
    const crudProductRequest_default: CrudProductRequest = {
        name: "",
        description: "",
        category: "",
        price: 0,
        rating: 0,
        imageName: "",
    };

    const [crudProduct, setCrudProduct] =
        useState<CrudProduct>(crudProduct_default);
    const [crudProductRequest, setCrudProductRequest] =
        useState<CrudProductRequest>(crudProductRequest_default);
    const [crudProducts, setCrudProducts] = useState<CrudProduct[]>([]);

    const create = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await fetch(`${baseUrl}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(crudProductRequest),
        });

        if (result.status === 201) {
            setCrudProductRequest(crudProductRequest_default);
        }
    };
    const get = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`);
        if (result.status === 200) setCrudProduct(await result.json());
    };
    const getAll = async () => {
        const result = await fetch(`${baseUrl}`);
        if (result.status === 200) setCrudProducts(await result.json());
    };
    const update = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await fetch(`${baseUrl}/${crudProduct.id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(crudProduct),
        });

        if (result.status === 200) {
            setCrudProduct(await result.json());
        }
    };
    const remove = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`, { method: "delete" });

        if (result.status === 204) {
            setCrudProduct(crudProduct_default);
        }
    };

    return (
        <CrudProductContext.Provider
            value={{
                crudProduct,
                setCrudProduct,
                crudProductRequest,
                setCrudProductRequest,
                crudProducts,
                create,
                get,
                getAll,
                update,
                remove,
            }}
        >
            {children}
        </CrudProductContext.Provider>
    );
};

export default CrudProvider;
