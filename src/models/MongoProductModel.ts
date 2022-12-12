export interface MongoProductItem {
    articleNumber: string;
    name: string;
    description: string;
    category: string;
    tag: string;
    price: number;
    rating: number;
    imageName: string;
}

export interface MongoProductRequest {
    articleNumber: string;
    name: string;
    description: string;
    category: string;
    tag: string;
    price: number;
    rating: number;
    imageName: string;
}

export interface MongoProduct {
    articleNumber: string;
    name: string;
    description: string;
    category: string;
    tag: string;
    price: number;
    rating: number;
    imageName: string;
}