import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter_50.png";
import meter2 from "../assets/img/meter_75.png";
import meter3 from "../assets/img/meter_100.png";
import javaimg from "../assets/img/tech/java.png";
import intellij from "../assets/img/tech/intellij-idea-icon-5.jpg";
import vscode from "../assets/img/tech/vscode.png";
import html from "../assets/img/tech/html5.png";
import javascrpit from "../assets/img/tech/javascript.png";
import nodejs from "../assets/img/tech/node-js.png";
import reactlogo from "../assets/img/tech/react.png"
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="skill">
      <section className="skill">
        <Container>
          <Row>
            <Col style={{ marginBottom: "15px" }}>
              <div className="skill-bx">
                <h2>Skill Domains</h2>
                <p></p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="image" />
                    <h5>Data analyst</h5>
                  </div>

                  <div className="item">
                    <img src={meter3} alt="image" />
                    <h5>Weight Lifter</h5>
                  </div>

                  <div className="item">
                    <img src={meter2} alt="image" />
                    <h5>Web developer</h5>
                  </div>
                </Carousel>


                <div style={{marginTop: "50px"}}>
                  <h2>Tech skills</h2>
                  <p></p>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="skill-slider"
                  >
                    <div className="item">
                      <img src={javaimg} alt="image" />
                      <h5>Java</h5>
                    </div>

                    <div className="item">
                      <img src={reactlogo} alt="image" />
                      <h5>React JS</h5>
                    </div>

                    <div className="item">
                      <img src={nodejs} alt="image" />
                      <h5>Node JS</h5>
                    </div>
                    <div className="item">
                      <img src={html} alt="image" />
                      <h5>HTML 5</h5>
                    </div>
                    <div className="item">
                      <img src={javascrpit} alt="image" />
                      <h5>JavaScrpit</h5>
                    </div>
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} />
      </section>
    </div>
  );
};

export default Skills;
