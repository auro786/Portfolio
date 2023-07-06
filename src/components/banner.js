import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/businessman.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "CyberSecurity Enthusiast", "Weight Lifter"];
  const [text, settext] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 200);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedtext = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    settext(updatedtext);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedtext === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedtext === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <section className="banner" id="home">
      <Container id="banner_container">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <img
              src={headerImg}
              alt="header img"
              id="banner_i"
              style={{ padding: "0" }}
            ></img>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeInUp visble"
                      : "not-visible"
                  }
                >
                  <span className="tagLine"> Welcome to my PortFolio</span>
                  <h1 style={{ fontSize: "3.5rem" }}>
                    {`Hi I'm Auro,`}
                    <br /> {`I'm a `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p> </p>
                  <a href="#connect" id="proj-link">
                    <button
                      onClick={() => console.log("banner connect button")}
                    >
                      Let's connect
                      <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
