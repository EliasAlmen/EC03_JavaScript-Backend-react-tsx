import React from 'react'
import BreadCrumbsRouterComponent from '../components/BreadCrumbsRouterComponent'

const BreadCrumbsSection: React.FC = () => {
  return (
    <div className="breadcrumb-container">
      <span className="container">
        <BreadCrumbsRouterComponent />
      </span>
    </div>
  )
}

export default BreadCrumbsSection