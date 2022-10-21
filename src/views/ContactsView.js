import React from 'react'
// import FormSection from '../sections/FormSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import MapSection from '../sections/MapSection'

const ContactsView = () => {
  return (
    <>
      <HeaderSection />
      <BreadCrumbsSection />
      <MapSection />
      {/* <FormSection /> */}
      <FooterSection />
    </>
  )
}

export default ContactsView