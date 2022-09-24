import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../asset/css/Bootstrap.min.css";
import "./Team.css";
import p from "../../asset/image/m.jpg";
import p2 from "../../asset/image/mu.jpg";
import p3 from "../../asset/image/f.jpg";
import SectionTitleStyle from "../SectionTitleStyle/SectionTitleStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Team = () => {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Mohammad Awad",
      desc: "Mohamed Awad is a Full-Stack Web Developer studying at Al-Balqa Applied University Computer Information Systems.",
      skills: " Skills : HTML , CSS , JavaScript , React jS , MySQL , PHP , Laravel , Rest API",
      img:p,
    },
    {
        id: 2,
        name: "Musa Aladdin",
        desc: "Musa Aladdin is a mobile application developer studying at Al-Balqa Applied University, Computer Information Systems.",
        skills: " Skills : Java , Dart , Flutter  , API ",
        img:p2,
      },
      {
        id: 3,
        name: "Faten Husseien",
        desc: "Faten Husseien is a Front-End Web Developer studying at Al-Balqa Applied University Computer Information Systems.",
        skills: " Skills : HTML , CSS , JavaScript , React jS , Java",
        img:p3,
      }
    
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <Fragment>
      <Container fluid={true} className="teamContainer text-center py-3">
        <SectionTitleStyle nameSection="Our Team" color="#fff" />
        <Slider {...settings} >
            {team.map((person)=>(
                 <Row key={person.id}>
                 <Col>
                   <img src={person.img} className="imgTeam" />
                   <h4 className="nameTeam">{person.name}</h4>
                   <p className="teamDesc">
                    {person.desc}
                     <span className="skills">{person.skills}</span>
                   </p>
                 </Col>
               </Row>
            ))}
         
         
          
        </Slider>
      </Container>
    </Fragment>
  );
};

export default Team;
