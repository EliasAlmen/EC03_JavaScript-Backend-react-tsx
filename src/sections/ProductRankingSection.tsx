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
    title1: string;
    title2: string;
    title3: string;
}

const ProductRankingSection: React.FC<Props> = ({title1, title2, title3, items=[]}) => {
  


    return (
    <section className="container-products-category-ranking">
        <div className="container">
            <div className="latest">
                <h1>{title1}</h1>
                {
                items.map(item => <ProductCardComponent key={item.articleNumber} item={item}/>)
                }
                
            </div>
            <div className="best">
                <h1>{title2}t</h1>
                {
                items.map(item => <ProductCardComponent key={item.articleNumber} item={item}/>)
                }
            </div>
            <div className="reacted">
                <h1>{title3}</h1>
                {
                items.map(item => <ProductCardComponent key={item.articleNumber} item={item}/>)
                }
            </div>
        </div>
        <div className="_border-bottom">
            <div className="_border"></div>
        </div>
    </section>
  )
}

export default ProductRankingSection