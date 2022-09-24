import React, { Fragment } from "react";
import {Col, Container, Row } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/Bootstrap.min.css";
const TopBanner = () => {
  return (
    <Fragment>
      <Container fluid={true} className="topFixedBanner p-0">
        <div className="topBannerOverlay">
          <Container className="topContent">
            <Row >
              <Col  className='text-center' >
                <h1 className="topTitle">Night Owl Team Programming</h1>
                <h4 className="topSubTitle">Learn Programming Skills</h4>
                <button className="btnaa">Learn More</button>
              </Col>
              
         
              
            </Row>

          
          </Container>
        </div>
      </Container>
    </Fragment>
  );
};
export default TopBanner;
