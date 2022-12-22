import React from 'react'
import GraphQlUpdateComponent from '../components/GraphQlUpdateComponent'

const GraphQlUpdateSection: React.FC = () => {
  return (
      <>
          <div className="container">
              <h1 className="my-5 text-center fw-bold">Create, Read, Update, Delete</h1>
              <div className="container-forms d-flex justify-content-center gap-5 text-center mt-5">
                  <GraphQlUpdateComponent />
              </div>
              <div className="read">
                  <ul className="list-group my-5"></ul>
              </div>
          </div>
      </>
  )
}

export default GraphQlUpdateSection