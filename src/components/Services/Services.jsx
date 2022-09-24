import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import "../../asset/css/Bootstrap.min.css";
import servImg from "../../asset/image/Services.jpg";
import SectionTitleStyle from "../SectionTitleStyle/SectionTitleStyle";

const Services = () => {
  const [service, setService] = useState([
    {
      id: 1,
      sname: "OFFICE APPLICATION",
      sdesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloreoptio ex cum, aliquid amet quam cupiditate veritatis explicabo consequatur. Velit deserunt id sed consequatur officia dolorum possimus fugiat iure maxime?",
      img: servImg,

    },
    {
      id: 2,
      sname: "OFFICE APPLICATION",
      sdesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloreoptio ex cum, aliquid amet quam cupiditate veritatis explicabo consequatur. Velit deserunt id sed consequatur officia dolorum possimus fugiat iure maxime?",
      img: servImg,

    },
    {
      id: 3,
      sname: "OFFICE APPLICATION",
      sdesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloreoptio ex cum, aliquid amet quam cupiditate veritatis explicabo consequatur. Velit deserunt id sed consequatur officia dolorum possimus fugiat iure maxime?",
      img: servImg,

    },
  
  ]);
  return (
    <Fragment>
      <Container>
        <SectionTitleStyle nameSection="My Services" />
        <Row sm={1} md={2} lg={3} className="g-4 mx-auto ">
          {service.map((sr)=>(
             <Col key={sr.id}>
             <div className="cardServices text-center">
               <img src={sr.img} className="servicesIcone" />
               <h4 className="cardServicesName">{sr.sname} </h4>
               <p className="cardServicesDesc">
                 {sr.sdesc}
               </p>
             </div>
           </Col>
          ))}
         

       
        </Row>
      </Container>
    </Fragment>
  );
};
export default Services;
