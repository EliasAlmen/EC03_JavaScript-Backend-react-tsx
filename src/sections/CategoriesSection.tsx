import React from 'react'
import CategoriesProductComponent from '../components/CategoriesProductComponent'

interface IProduct {
    imageName: string;
    name: string;
    category: string;
    price: number;
    articleNumber: string;
    rating: number;
    quantity: number;
}

interface Props {
    items: IProduct[] | null;
}

const CategoriesSection: React.FC<Props> = ({ items = [] }) => {

    // Categories 
    const cat1 = "coats"
    const cat2 = "dresses"
    const cat3 = "sets"
    const cat4 = "jackets"
    const cat5 = "t-shirts"
    const cat6 = "sweaters"
    const cat7 = "watches"
    const cat8 = "shoes"
    const cat9 = "jeans"
    const cat10 = "bags"
    const cat11 = "tops"
    const cat12 = "pants"

    return (
        <>
            <div className="container">
                <div className="categories">
                    <ul className="grid-1">
                        <h6 className="text-center">{cat1.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat1)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                    <ul className="grid-2">
                        <h6 className="text-center">{cat2.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat2)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                    <ul className="grid-3">
                        <h6 className="text-center">{cat3.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat3)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                    <ul className="grid-4">
                        <h6 className="text-center">{cat4.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat4)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                    <ul className="grid-5">
                        <h6 className="text-center">{cat5.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat5)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                    <ul className="grid-6">
                        <h6 className="text-center">{cat6.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat6)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                    <ul className="grid-7">
                        <h6 className="text-center">{cat7.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat7)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                    <ul className="grid-8">
                        <h6 className="text-center">{cat8.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat8)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                    <ul className="grid-9">
                        <h6 className="text-center">{cat9.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat9)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                    <ul className="grid-10">
                        <h6 className="text-center">{cat10.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat10)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                    <ul className="grid-11">
                        <h6 className="text-center">{cat11.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat11)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                    <ul className="grid-12">
                        <h6 className="text-center">{cat12.toLocaleUpperCase()}</h6>
                        {
                            items.filter(product => product.category.toLowerCase().includes(cat12)).map(item => <li key={item.articleNumber}><CategoriesProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CategoriesSection