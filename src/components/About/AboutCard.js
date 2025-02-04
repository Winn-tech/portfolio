import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nwuizu Oluchukwu Godwin </span>, 
            a  <span className="purple"> software developer</span> and a <span className="purple">coding tutor</span>.
            
            <br />
            Experienced in React, JavaScript, HTML, CSS, and API integrations, with a proven track record of developing a full-scale web application platforms, including payment gateway integration. In addition to development, I am an ICT and coding tutor, dedicated to mentoring students in programming and web development.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books.
            </li>
            <li className="about-activity">
              <ImPointRight /> Taking evening walks.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
