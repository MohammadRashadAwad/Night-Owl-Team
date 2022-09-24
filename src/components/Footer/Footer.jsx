import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import '../../asset/css/Bootstrap.min.css';
import {FaFacebook } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaMap} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {FaPhone} from "react-icons/fa";







 const Footer = () => {
  return (
   <Fragment>
      <Container fluid={true} className='footer '>
        <Container  >
          <Row className='text-center g-4' >
            <Col sm={12} md={12} lg={4}>
              <h1 className='footerTitle'>Follow Us</h1>
              <div className='socialIcone'>
                <a href='https://web.facebook.com/Mohammad.R5.awad' className='icone' ><FaFacebook/> </a>
                <a href='https://twitter.com/Mohammad_R_Awad' className='icone' ><FaTwitter/> </a>
                <a href='https://github.com/MohammadRashadAwad' className='icone' ><FaGithub/> </a>
                <a href='#' className='icone' ><FaLinkedin/> </a>

              </div>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <h1 className='footerTitle'>Address</h1>
              <div className='address'>
                <a href='#' className='icone '  ><FaMap/> Jordan-Amman </a>
                <a href='mailto:awad.520@outlook.com' className='icone' ><MdEmail/>awad.520@outlook.com</a>
                <a href='tel:0788304304' className='icone' ><FaPhone/>0788304304 </a>

              </div>
            </Col>
            <Col sm={12} md={12} lg={4}>
            <h1 className='footerTitle'>Information</h1>
              <div className='address'>
                <Link to='/about' className='icone ' >About</Link>
                <Link to='/contact' className='icone' >Contact</Link>
                <Link to='/project' className='icone' >Projects </Link>

              </div>
            </Col>
          </Row>
          <Row>
            <p className='text-center g-5 footerTitle'>© 2022 Mohammad Awad All Right Reserved</p>
          </Row>
        </Container>
      </Container>
   </Fragment>
  )
}

export default Footer