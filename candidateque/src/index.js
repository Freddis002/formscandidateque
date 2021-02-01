import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "rsuite/dist/styles/rsuite-default.css";
import "./index.css";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Profil1 from "./Component/Profil1";
import Souhait from "./Component/souhait";
import Cv from "./Component/cv";
import Experience from "./Component/experience";
import Competence from "./Component/competences";
import Nav from "./Component/nav";

function App(props) {
  const [page, setPage] = useState(1);
  const[step,setStep] = useState(1);
   

  const handleChangePage = (value) => {
    setPage(value);
    setStep(value)
  };





console.log(step)
  if (page === 1) {
    return (
      <Container>
        <Nav changePage={step} />
        <Profil1 onChangePage={handleChangePage}  />
      </Container>
    );
  } else if (page === 2) {
    return (
      <Container>
        <Nav changePage={step} />
        <Souhait onChangePage={handleChangePage} />
      </Container>
    );
  } else if (page === 3) {
    return (
      <Container>
        <Nav changePage={step} />
    <Cv onChangePage={handleChangePage} />
    </Container>
    );
    
  } else if (page === 4) {
    return (
      <Container>
        <Nav changePage={step} />
    <Experience onChangePage={handleChangePage} />;
    </Container>
    );

    } else if (page === 5) {
      return (
        <Container>
          <Nav changePage={step} />
          <Competence onChangePage={handleChangePage} />;
        </Container>
      );
    }
  
}

ReactDOM.render(
  <Container>
    <Row>
      <Col></Col>
    </Row>
    <Row>
      <Col>
        <App />
      </Col>
    </Row>
  </Container>,
  document.getElementById("root")
);
