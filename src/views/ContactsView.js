import React from 'react'
import FormSection from '../sections/FormSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'

const ContactsView = () => {
  return (
    <>
      <HeaderSection />
      <BreadCrumbsSection />
      <FormSection />
      <FooterSection />
    </>
  )
}

export default ContactsView