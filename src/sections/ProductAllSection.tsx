import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'

interface IProduct {
    imageName: string;
    name: string;
    category: string;
    price: number;
    articleNumber: string;
    rating: number;
    quantity: number;
    description: string;
}

interface Props {
    items: IProduct[];
    title: string;
}

const ProductAllSection: React.FC<Props> = ({ title, items = [] }) => {

    return (
        <section className="container ">
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {
                        items.map(item => <ProductCardComponent key={item.articleNumber} item={item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductAllSection