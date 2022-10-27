import React from 'react'
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";


const BreadCrumbsRouterComponent = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
    </>
  );
};
export default BreadCrumbsRouterComponent