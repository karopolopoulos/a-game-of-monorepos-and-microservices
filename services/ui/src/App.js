import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Quotes } from "./components/Quotes";
import { Survey } from "./components/Survey";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="mb-5">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img src="/stark.ico" width="50" height="50" alt="" /> A Song of
            Monorepos and Microservices
          </Navbar.Brand>
        </Navbar>
      </div>
      <Container>
        <Row className="mb-5">
          <Col>
            <Quotes />
          </Col>
        </Row>
        <Row>
          <Col>
            <Survey />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
