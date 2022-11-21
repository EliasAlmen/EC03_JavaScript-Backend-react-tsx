export interface Iitem {
    imageName: string;
    name: string;
    category: string;
    price: number;
    articleNumber: string;
    rating: number;
    quantity: number;
    description: string; 
}

export interface ItemProp {
    item: Iitem;
}

