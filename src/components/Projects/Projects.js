import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import ticketwave from "../../Assets/Projects/Screenshot 2025-02-04 234924.png"
import winncocktail from "../../Assets/Projects/winn-cocktail.png"
import ticketwave from "../../Assets/Projects/ticketwave.png"
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return ( 
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketwave}
              isBlog={false}
              title="Ticketwave"
              description="A fullstack app built mainly with ReactJs and Vanilla CSS for the frontend, seamlessly integrating multiple backend APIs. It features real-time event listings, an intuitive seat selection interface, and a smooth booking system for a hassle-free ticketing experience."
              ghLink="https://github.com/Winn-tech/ticketwave"
              demoLink="https://ticketwave.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={winncocktail}
              isBlog={false}
              title="Winn-Cocktail"
              description="A beautifully crafted cocktail discovery app built with React.js and styled with Vanilla CSS. It fetches data from a cocktail API, providing users with a vast collection of wines and cocktails, along with their ingredients and preparation methods. Users can effortlessly search for drinks, explore recipes, and educate themselves on mixology."
              ghLink="https://github.com/Winn-tech/winn-cocktail"
              demoLink="https://winn-cocktail.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Winns Note App"
              description="A simple yet powerful note-taking app built with React.js. It uses local storage for persistent data saving, ensuring notes are never lost. The app features a light/dark mode toggle and includes essential note management functionalities like adding, editing, and deleting notes. State management is efficiently handled using useReducer, making the app more scalable and maintainable."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Code plus"
              description="A React.js-based online editor supporting HTML, CSS, and JavaScript with live preview. Includes a markdown editor with custom HTML tags, a toolbar, and instant preview for README creation. Features auto-save via Local Storage and optional version tracking, ensuring you don't loose progress."
              ghLink="https://github.com/winn-tech/ticketwave"
              demoLink="https://ticketwave.vercel.app"
            />
          </Col>
 
         

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
