import React, { Fragment } from 'react';
import '../asset/css/Bootstrap.min.css';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Services from '../components/Services/Services';
import './PageStyle.css';
import TopPage from './TopPage';

const ServicesPage = () => {
  return (
    <Fragment>
      <NavigationBar/>
      <TopPage title='ServicesPage'/>
      <Services/>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default ServicesPage
