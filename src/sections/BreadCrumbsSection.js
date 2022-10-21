import React from 'react'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink, useLocation } from 'react-router-dom'

const BreadCrumbsSection = () => {
const breadcrumbs = useBreadcrumbs();
const location = useLocation()

  return (
    <>
      <div className="breadcrumb-container container">
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <NavLink 
            key={match.pathname} 
            to={match.pathname} 
            className={`_breadcrumb ${match.pathname === location.pathname ? "breadcrumb-active" : "breadcrumb-not-active"}`}>
            {breadcrumb}
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default BreadCrumbsSection