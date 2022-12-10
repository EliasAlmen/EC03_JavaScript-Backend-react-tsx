export interface MongoProductItem {
    tag: string;
    articleNumber: string;
    description: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    imageName: string;
    title?: string;
}

export interface MongoProductRequest {
    name: string;
    description: string;
    category: string;
    price: number;
    rating: number;
}

export interface MongoProduct {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    rating: number;
}