export interface CrudProduct {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    rating: number;
}

export interface CrudProductRequest {
    name: string;
    description: string;
    category: string;
    price: number;
    rating: number;
}