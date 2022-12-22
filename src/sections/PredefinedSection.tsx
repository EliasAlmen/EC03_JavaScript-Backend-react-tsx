import React, { useEffect } from "react";
import CrudCreate from "../components/CrudCreate";
import { useProductContext, ProductContextType } from "../contexts/PredefinedProductContext";
import PredefinedProductAllSection from "./PredefinedProductAllSection";

const PredefinedSection: React.FC = () => {
    

    useEffect(() => {
        getAll()
    }, [])

    const {
        products,
        getAll
    } = useProductContext() as ProductContextType
    
    
    return (
        <>
            <div className="container">
                <h1 className="my-5 text-center fw-bold">Create, Read, Update, Delete (Predefined)</h1>
                <p className="text-center text-muted">"local database" populated with predefined products.</p>
                <div className="read">
                    <h3 className="mb-2 mt-5 text-center fw-bold">Products list</h3>
                    <ul className="list-group mb-5">
                        <PredefinedProductAllSection title={""} items={products} />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PredefinedSection;
