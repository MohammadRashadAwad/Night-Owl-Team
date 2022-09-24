import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../asset/css/Bootstrap.min.css";
import "./About.css";
import owl from "../../asset/image/owl2.jpg";
import SectionTitleStyle from "../SectionTitleStyle/SectionTitleStyle";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const settings = {
    words: [
      "Graphic Design ",
      "Website Development",
      "Mobile Application Development",
      "Marketed Projects"
    ],
    cursor: true,
    loop: 0,
  };
  return (
    <Fragment>
      <Container>
        <SectionTitleStyle nameSection="About As" />
        <Row className="g-4">
          <Col sm={12} md={6} lg={6} >
            <img src={owl} className="aboutImg" />
          </Col>
          <Col sm={12} md={6} lg={6} >
            <div className="div">
              <h2 className="aboutHello">Hi There,We are</h2>
              <h2 className="aboutHello">NIGHT OWL PROGRAMING TEAM .</h2>
              <p className="aboutDesc">
                The Work We Do{" "}
                <span className="aboutWork">
                  <Typewriter {...settings} />
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
