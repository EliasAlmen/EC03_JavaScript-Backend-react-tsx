export interface ProductItem {
    tag: string;
    articleNumber: string;
    description: string;
    name: string;
    category: string;
    price: number;
    rating: any;
    imageName: string;
    title?: string;
    _id?: string;
    productGraphQL?: any;
}