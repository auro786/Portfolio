import React from "react";
import { Nav, Row, Col, Container, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/weather_proj.png";
import projImg2 from "../assets/img/tictactoe_proj.png";
import projImg3 from "../assets/img/moviesden-proj.png";
import { ProjecCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "HTML, CSS, Weather API(API NINJAS)",
      imgUrl: projImg1,
      projUrl: "https://cozy-pastelito-dd982b.netlify.app/"
    },
    {
      title: "Tic Tac Toe",
      description: "HTML, CSS, JAVASCRIPT",
      imgUrl: projImg2,
      projUrl: "https://wizardly-goodall-33c354.netlify.app/"
    },
    {
      title: "Movies den",
      description: "React, JAVASCRPIT, API- OMDB API",
      imgUrl: projImg3,
      projUrl: "https://courageous-trifle-05fd85.netlify.app/"
    },
  ];

  return (
    <section
      id="project"
      className="project"
      style={{ backgroundimage: { colorSharp2 } }}
    >
      <Container>
        <Row>
          <TrackVisibility>
           
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h2>Projects</h2>
                <p>
                  Ea nostrud pariatur anim excepteur aliquip et veniam enim
                  consequat Lorem occaecat excepteur. Excepteur in id aliqua ad
                  ut qui mollit minim magna in incididunt incididunt non
                  occaecat. Dolore aliquip labore commodo deserunt nulla
                  consequat in pariatur.
                </p>
              </div>
            )}
          </TrackVisibility>

          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav
              variant="pills"
              className="nav-pills mb-5 justify-content-center align-items-center"
              id="pills-tab"
              style={{ padding: 0 }}
            >
              <Nav.Item>
                <Nav.Link eventKey="first">Web Dev</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Data Analyst</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {projects.map((project, index) => {
                    return <ProjecCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Lorem</Tab.Pane>
              <Tab.Pane eventKey="third">epsium</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Row>
      </Container>
      {/* <img className="background-img-right" src={colorSharp2}/> */}
    </section>
  );
};

export default Projects;
