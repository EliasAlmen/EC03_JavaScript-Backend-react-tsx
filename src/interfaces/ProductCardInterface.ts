export interface IProduct {
    imageName: string;
    name: string;
    category: string;
    price: number;
    articleNumber: string;
    rating: number;
    quantity: number;
}

export interface Props {
    product: any;
    quantity: number;
    articleNumber: string;
    items?: IProduct[];
    title?: string;
    title1?: string;
    title2?: string;
    title3?: string;
}