import React, { Fragment, PureComponent, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Chart.css";
import "../../asset/css/Bootstrap.min.css";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";
import SectionTitleStyle from "../SectionTitleStyle/SectionTitleStyle";

const Chart = () => {
  const [data, setData] = useState([
    { X: "HTML", Y: 90 },
    { X: "CSS", Y: 75 },
    { X: "JS", Y: 70 },
    { X: "REACT JS", Y: 75 },
    { X: "MySQL", Y: 50 },
    { X: "PHP", Y: 60 },
    { X: "LARAVEL", Y: 50 },
  ]);
  return (
    <Fragment>
      <Container>
        <SectionTitleStyle nameSection='Technology used'/>
        <Row  sm={1} md={1} lg={2} className='g-4'>
          <Col style={{height:'300px'}} >
            <h4 className="text-center titleChar">Experinces</h4>
            <ResponsiveContainer >
              <BarChart width={150} height={40} data={data}>
              <XAxis dataKey="X" />
                <Bar dataKey="Y" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Col>

          <Col className=' charDesc'>
            <p className=" text-break chartDescription   ">
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
      </Container>
    </Fragment>
  );
};

export default Chart;
