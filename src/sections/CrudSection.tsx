import React from 'react'
import CrudCreate from '../components/CrudCreate';
import CrudList from '../components/CrudList';
import CrudUpdate from '../components/CrudUpdate';

const CrudSection: React.FC = () => {


    return (
        <>
            <div className="container">
                <div className="container-forms d-flex justify-content-center gap-5 text-center mt-5">
                    <CrudCreate />
                    <CrudUpdate />
                </div>
                <div className="read">
                    <ul className='list-group my-5'>
                        <CrudList />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CrudSection