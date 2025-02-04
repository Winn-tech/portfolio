import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiCss3,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { FaHtml5 } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { ImNpm } from "react-icons/im";
import { TbBrandNextjs } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* <p>ReactJs</p> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* <p>ReactJs</p> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript/>
      </Col>
      {/* <p>ReactJs</p> */}

      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <ImNpm />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
     
    </Row>
  );
}

export default Techstack;
