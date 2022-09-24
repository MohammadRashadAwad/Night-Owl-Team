import React, { Fragment } from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import TopPage from './TopPage'

const ContactPage = () => {
  return (
    <Fragment>
      <NavigationBar/>
      <TopPage title="Contact Page"/>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default ContactPage
