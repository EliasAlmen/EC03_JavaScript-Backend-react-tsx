export interface CrudProduct {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    imageName: string;
}

export interface CrudProductRequest {
    name: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    imageName: string;
}