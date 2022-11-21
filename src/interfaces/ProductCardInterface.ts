export interface IProduct {
    imageName: string;
    name: string;
    category: string;
    price: number;
    articleNumber: string;
    rating: number;
    description: string; 
    quantity: number;
}

export interface Props {
    product: any;
    quantity: number;
    articleNumber: string;
    items?: IProduct[];
    cartItems?: any;
    imageName: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    description?: string; 
    title?: string;
    title1?: string;
    title2?: string;
    title3?: string;
}