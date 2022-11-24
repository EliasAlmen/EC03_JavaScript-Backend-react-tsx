import React from 'react'

const CrudSection: React.FC = () => {
    return (
        <>
            <div className="container">
                <ul className="container-forms d-flex justify-content-evenly text-center mt-5">
                    <li className="create form-group row">
                        <label htmlFor="name" className='form-label'>Add</label>
                        <div className="col ">
                            <input type="text" name='name' className='form-control' placeholder='Name...'/>
                            <input type="text" name='price' className='form-control' placeholder='Price...'/>
                            <input type="text" name='category' className='form-control' placeholder='Category...' />
                        </div>
                        <div className="col">
                            <input type="number" name='rating' className='form-control' placeholder='Choose a rating...'/>
                            <input type="text" name='articleNumber' className='form-control' placeholder='Article number...' />
                            <input type="text" name='description' className='form-control' placeholder='Description...'/>
                        </div>
                    </li>
                    <li className="update form-group row">
                        <label htmlFor="update">Update</label>
                        <div className="col">
                            <input type="text" name='name' className='form-control' placeholder='Name...'/>
                            <input type="text" name='price' className='form-control' placeholder='Price...'/>
                            <input type="text" name='category' className='form-control' placeholder='Category...' />
                        </div>
                        <div className="col">
                            <input type="number" name='rating' className='form-control' placeholder='Choose a rating...'/>
                            <input type="text" name='articleNumber' className='form-control' placeholder='Article number...' />
                            <input type="text" name='description' className='form-control' placeholder='Description...'/>
                        </div>
                    </li>
                    <li className="delete">
                        <label htmlFor="remove">Remove</label>
                        <input type="text" name='remove' className='form-control' />
                    </li>
                </ul>
                <div className="read">
                    <ul className='list-group my-5'>
                        <li className="list-group-item"></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CrudSection