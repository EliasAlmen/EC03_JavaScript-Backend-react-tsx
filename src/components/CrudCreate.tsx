import React from 'react'
import { CrudProductContext, ICrudProductContext } from '../contexts/CrudContext';

const CrudCreate = () => {
    
const { crudProductRequest, setCrudProductRequest, create } = React.useContext(CrudProductContext) as ICrudProductContext;
    
    
    return (
        <form onSubmit={create} className="create form-group">
            <label htmlFor="name" className='form-label h3'>Add</label>
            <input value={crudProductRequest.name} onChange={(e) => setCrudProductRequest({ ...crudProductRequest, name: e.target.value })} type="text" name='name' className='form-control' placeholder='Name...' />
            <input value={crudProductRequest.category} onChange={(e) => setCrudProductRequest({ ...crudProductRequest, category: e.target.value })} type="text" name='category' className='form-control' placeholder='Category...' />
            <input value={crudProductRequest.description} onChange={(e) => setCrudProductRequest({ ...crudProductRequest, description: e.target.value })} type="text" name='description' className='form-control' placeholder='Description...' />
            <input value={crudProductRequest.price} onChange={(e) => setCrudProductRequest({ ...crudProductRequest, price: parseInt(e.target.value) })} type="number" name='price' className='form-control' placeholder='Price...' />
            <input value={crudProductRequest.rating} onChange={(e) => setCrudProductRequest({ ...crudProductRequest, rating: parseInt(e.target.value) })} type="number" name='rating' className='form-control' placeholder='Choose a rating...' />
            <button className="btn btn-success btn-sm py-2 mt-3">Publish product</button>
        </form>
    )
}

export default CrudCreate