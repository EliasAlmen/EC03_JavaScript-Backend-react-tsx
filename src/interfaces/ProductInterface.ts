export interface Iitem {
    imageName: string;
    name: string;
    category: string;
    price: number;
    articleNumber: string;
    rating: number;
    quantity: number; 
}

export interface Iproduct {
    product: string;
}

export interface ProductProp {
    item: Iitem;
}

