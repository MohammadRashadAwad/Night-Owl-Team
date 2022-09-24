import React, { Fragment, useState } from "react";
import "../../asset/css/Bootstrap.min.css";
import "./Video.css";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitleStyle from "../SectionTitleStyle/SectionTitleStyle";
import { BsPlay } from "react-icons/bs";
import VideoModal from "./VideoModal";
const Video = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Container className="text-center mb-4">
        <SectionTitleStyle nameSection="Our Video " />

        <Row sm={1} md={1} lg={1} >
          <Col >
            <p className="videoDesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              optio ex cum, aliquid amet quam cupiditate veritatis explicabo
              consequatur. Velit deserunt id sed consequatur officia dolorum
              possimus fugiat iure maxime? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Dolore optio ex cum, aliquid amet
              quam cupiditate veritatis explicabo consequatur. Velit deserunt id
              sed consequatur officia dolorum possimus fugiat iure maxime?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              optio ex cum, aliquid amet quam cupiditate veritatis explicabo
              consequatur. Velit deserunt id sed consequatur officia dolorum
              possimus fugiat iure maxime?
            </p>
          </Col>
        </Row>

        
        <Row sm={1} md={1} lg={1} >
        <Col  className="video ">
            <BsPlay
              onClick={handleShow}
              className="videoIcone"
            />
            
          </Col>
        </Row>
      </Container>
      <VideoModal show={show} handleClose={handleClose} />
    </Fragment>
  );
};

export default Video;
