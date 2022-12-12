import React from 'react'
import MongoUpdateComponent from '../components/MongoUpdateComponent'

const MongoUpdateSection: React.FC = () => {
  return (
      <>
          <div className="container">
              <h1 className="my-5 text-center fw-bold">Create, Read, Update, Delete</h1>
              <div className="container-forms d-flex justify-content-center gap-5 text-center mt-5">
                  <MongoUpdateComponent />
              </div>
              <div className="read">
                  <ul className="list-group my-5"></ul>
              </div>
          </div>
      </>
  )
}

export default MongoUpdateSection