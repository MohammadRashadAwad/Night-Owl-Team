import React, { Fragment, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./RecentProject.css";
import "../../asset/css/Bootstrap.min.css";
import SectionTitleStyle from "../SectionTitleStyle/SectionTitleStyle";
import p1 from "../../asset/image/clinic.jpg";
import p2 from "../../asset/image/course.jpg";
import { useNavigate } from "react-router-dom";

const RecentProject = () => {
  const [projectCard, setProjectCard] = useState([
    {
      id:1,
      title: "Card Title",
      img: p1,
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {       id:2,

      title: "Card Title",
      img: p2,
      desc: "Some quick example text to build on the card title and make upthe bulk of the card's content.",
    },
    {
      id:3,

      title: "Card Title",
      img: p1,
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ]);
  const navigate=useNavigate();
  return (
    <Fragment>
      <Container className="text-center p-0">
        <SectionTitleStyle nameSection="Recent Project" />
        <Row  xs={1} md={2} lg={3} className="g-4" >
       {projectCard.map((cd)=>(
           <Col  key={cd.id}>
           <Card  className="projectCard">
             <Card.Img variant="top" src={cd.img}  className='cardImg'/>
             <Card.Body>
               <Card.Title className="projectName">{cd.title}</Card.Title>
               <Card.Text className="projectDesc">{cd.desc}</Card.Text>
               <button className="btnaa" onClick={()=>navigate('/project-details')}>More details</button>
             </Card.Body>
           </Card>
         </Col>
       ))}
        </Row>
      </Container>
    </Fragment>
  );
};
export default RecentProject;
