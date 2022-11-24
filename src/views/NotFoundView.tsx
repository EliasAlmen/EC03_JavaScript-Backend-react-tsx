import React from 'react'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'

const NotFoundView = () => {
  
  let currentPage = "404 - Page not found"
  document.title = `${currentPage} || Fixxo`
  
  return (
    <>
      <HeaderSection />
      <BreadCrumbsSection />
      <div className='container d-flex justify-content-center align-items-center' style={ { height: "500px" } }>
        <h1>404 - Page not found</h1>
      </div>
      <div style={{position: "fixed", bottom: "0", width: "100%"}}>
        <FooterSection />
      </div>
    </>
  )
}

export default NotFoundView