import React from "react";
import { Nav, Row, Col, Container, Tab } from "react-bootstrap";
import "animate.css";

const Academics = () => {
  return (
    <section id="academics">
      <h2 style={{ textAlign: "center" }}>Academics</h2>
        <Tab.Container id="academics-tab" defaultActiveKey="first">
          <Nav
            variant="pills"
            className="nav-pills flex-row mb-5 justify-content-between align-items-center"
            id="pills-tab"
            style={{ padding: 0 }}
          >
            <div className="col-4">
              <Nav.Item>
                <Nav.Link eventKey="first">Web Developer</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="second">Data Analyst</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link eventKey="third">Data Analyst</Nav.Link>
              </Nav.Item>
            </div>
          </Nav>
          <div className="col-4">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  <p>hiii this is web dev</p>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Lorem</Tab.Pane>
              <Tab.Pane eventKey="third">epsium</Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
    </section>
  );
};

export default Academics;
