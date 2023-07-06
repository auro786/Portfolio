import React from "react";
import { Nav, Row, Col, Container, Tab } from "react-bootstrap";
import "animate.css";

const Academics = () => {
  return (
    <section id="academics">
      <h2 style={{ textAlign: "center" }}>Academics</h2>
      <Tab.Container id="academics-tab" defaultActiveKey="first">
        <Row className="justify-content-center text-center">
          <Col>
            <Nav
              variant="pills"
              className="nav-pills flex-row mb-5 justify-content-between align-items-center"
              id="pills-tab"
              style={{ padding: 0 }}
            >
              <div className="col-4">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    12<sup>th</sup>{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">B-TECH</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    10<sup>th</sup>
                  </Nav.Link>
                </Nav.Item>
              </div>
            </Nav>
          </Col>
          <Col>
            <div className="col-4">
              <Tab.Content>
                <Tab.Pane eventKey="first">hiii this is web dev</Tab.Pane>
                <Tab.Pane eventKey="second">Lorem</Tab.Pane>
                <Tab.Pane eventKey="third">epsium</Tab.Pane>
              </Tab.Content>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
};

export default Academics;
