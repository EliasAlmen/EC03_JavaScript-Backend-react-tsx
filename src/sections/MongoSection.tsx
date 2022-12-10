import React from 'react'
import MongoCreateComponent from '../components/MongoCreateComponent'
import MongoListComponent from '../components/MongoListComponent'

const MongoSection: React.FC = () => {
  return (
      <>
          <div className="container">
              <h1 className="my-5 text-center fw-bold">Create, Read, Update, Delete (MongoDB)</h1>
              <p className="text-center text-muted">MongoDB Atlas Shared</p>
              <p className="text-center text-muted">Hover items to update or delete. Use the dice button or enter values manually.</p>
              <div className="container-forms d-flex justify-content-center gap-5 text-center mt-5">
                  <MongoCreateComponent />
              </div>
              <div className="read">
                  <h3 className="mb-2 mt-5 text-center fw-bold">Products list</h3>
                  <ul className="list-group mb-5"> 
                      <MongoListComponent />
                  </ul>
              </div>
          </div>
      </>
  )
}

export default MongoSection