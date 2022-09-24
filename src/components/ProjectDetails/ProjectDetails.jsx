import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../asset/css/Bootstrap.min.css";
import "./ProjectDetails.css";
import p from "../../asset/image/CourseDetails.jpg";

const ProjectDetails = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className='g-4'>
          <Col sm={12} md={6} lg={6}>
            <img src={p} alt="" className="projectDeImg" />
          </Col>

          <Col sm={12} md={6} lg={6}>
            <h1 className="projectDeTitle">Templet Hello</h1>
            <p className="projectDeDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nihil explicabo deleniti temporibus alias labore tempora illum
              maiores, praesentium in quae provident a nostrum repudiandae quasi
              ab doloremque, repellat assumenda.
              nihil explicabo deleniti temporibus alias labore tempora illum
              maiores, praesentium in quae provident a nostrum repudiandae quasi
              ab doloremque, repellat assumenda.
              nihil explicabo deleniti temporibus alias labore tempora illum
              maiores, praesentium in quae provident a nostrum repudiandae quasi
              ab doloremque, repellat assumenda.
              nihil explicabo deleniti temporibus alias labore tempora illum
              maiores, praesentium in quae provident a nostrum repudiandae quasi
              ab doloremque, repellat assumenda.
            </p>
            <button className="btnaa">Visiting site</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectDetails;
