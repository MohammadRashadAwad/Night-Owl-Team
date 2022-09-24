import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../asset/css/Bootstrap.min.css";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import "./PageStyle.css";
import TopPage from "./TopPage";

const AboutPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <TopPage title="About Page" />
      <About />
      <Container className='mt-5'>
        <Row  className='g-3'>
          <Col>
            <h1 className="whoTitle">Who Are We</h1>
            <p className="whoDesc">
              We are a team specialized in developing, analyzing and designing
              software and providing all software services. From technical
              consultations, providing appropriate solutions, website
              development and design, mobile application development, and
              desktop software development
            </p>
            <hr />
          </Col>
         
        </Row>
        <Row className='g-3'>
        <Col sm={12} md={6} lg={6}>
            <h1  className="whoTitle">Vision</h1>
            <p className="whoDesc">
              To establish our own company and become a leader in providing all
              software services locally and globally
            </p>
            <hr/>
          </Col>
          <Col  sm={12} md={6} lg={6}>
            <h1  className="whoTitle">Mission</h1>
            <p className="whoDesc">
              To establish our own company and become a leader in providing all
              software services locally and globally
            </p>
            <hr/>

          </Col>
        </Row>
      </Container>
      <Footer/>
    </Fragment>
  );
};

export default AboutPage;
