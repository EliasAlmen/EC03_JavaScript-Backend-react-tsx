import React, { useState } from 'react'
import SearchProductComponent from '../components/SearchProductComponent';


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
}



const SearchSection: React.FC<Props> = ({items = []}) => {

    const [query, setQuery] = useState("");
    
    return (
        <>
            <div className="container">
                <div className="search">
                    <input type="text" placeholder='Search for product name...' className="search-input" onChange={(e) => setQuery(e.target.value)} />
                    <ul className="list">
                        {
                            items.filter(product=>product.name.toLowerCase().includes(query)).map(item => <li key={item.articleNumber}><SearchProductComponent key={item.articleNumber} item={item} /></li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SearchSection