import React from 'react'
import useBreadcrumbs from "use-react-router-breadcrumbs";

const BreadCrumbsSection = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <React.Fragment>
      {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
    </React.Fragment>
  )
}

export default BreadCrumbsSection