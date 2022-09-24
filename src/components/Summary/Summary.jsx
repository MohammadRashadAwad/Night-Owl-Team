import React, { Fragment } from "react";
import { Col, Container, Row,Card } from "react-bootstrap";
import "../../asset/css/Bootstrap.min.css";
import "./Summary.css";

const Summary = () => {
  return (
    <Fragment>
      <Container fluid={true} className="bgImgCont p-0">
      <div className="bgImgContOverLay"></div>

       <Container  >
      
          <Row>
            <Col sm={12} md={12} lg={4}>
              <Card style={{width: '18rem'  }} className='summaryCard'>
                <Card.Body>
                  <Card.Title className='summaryCardTitle'>WHY NIGHT OWL ?</Card.Title>
                  <Card.Text>
                    <p className="summaryCardText">Execution Of Projects With high Accuracy</p>
                    <p className="summaryCardText">Commitment To Implement Projects On Time</p>
                    <p className="summaryCardText">System Analyze Accuracy</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={12} lg={8}>
                <Row className='summaryDe'>
                    <Col>
                        <h1>+100</h1>
                        <h4>Completed projects</h4>
                    </Col>
                    <Col>
                        <h1>+30</h1>
                        <h4>Marketed Projects</h4>
                    </Col>
                    <Col>
                        <h1>50</h1>
                        <h4>Customer review</h4>
                    </Col>
                </Row>
            </Col>
          </Row>

       </Container>
      </Container>
    </Fragment>
  );
};

export default Summary;
