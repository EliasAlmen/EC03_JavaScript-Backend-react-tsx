import React from 'react'
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";

// Research at https://www.npmjs.com/package/use-react-router-breadcrumbs
// Combined with https://stackblitz.com/edit/github-fiw8uj?file=src%2FApp.tsx 
// Custom made breadcrumbs

//Apparently there should be a easier way? Recommended to use createBrowerRouter instead of BrowserRouter

//Getting error for uniqe key prop... can be solved if key moved up one lvl.
// but then i cant control the SCSS...

const BreadCrumbsRouterComponent = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <React.Fragment key={match.pathname}>
          <NavLink key={match.pathname} to={match.pathname}>
            {breadcrumb}
          </NavLink>
          {index !== breadcrumbs.length - 1 && '\u00a0\u00a0>\u00a0\u00a0'}
        </React.Fragment>
      ))}
    </>
  )
}
export default BreadCrumbsRouterComponent