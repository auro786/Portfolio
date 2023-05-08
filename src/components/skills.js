import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter_50.png";
import meter2 from "../assets/img/meter_75.png";
import meter3 from "../assets/img/meter_100.png";
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
      <section className="skill" >
        <Container>
          <Row>
            <Col style={{ marginBottom: "15px" }}>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>lorem</p>
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
