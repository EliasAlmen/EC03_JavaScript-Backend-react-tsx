import React, { useEffect } from 'react'
import { CrudProductContext, ICrudProductContext } from '../contexts/CrudContext';
import { CrudProduct } from '../models/CrudModel';

const CrudList = () => {
    
    const { crudProducts, getAll, remove } = React.useContext(CrudProductContext) as ICrudProductContext;

    useEffect(() => {
        getAll()
    }, [getAll])

    
    return (
        <>
            <h3 className="mb-4 text-center">Products</h3>
            {
                crudProducts.map((crudProduct: CrudProduct) => (<div onClick={() => { remove(crudProduct.id) }} key={crudProduct.id} className="mb-3 list-group-item">{crudProduct.name} {crudProduct.category} {crudProduct.description} {crudProduct.rating} {crudProduct.price}</div>))
            }
        </>
    )
}

export default CrudList