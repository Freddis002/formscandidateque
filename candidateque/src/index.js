import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Profil1 from "./Component/Profil1";
import Souhait from "./Component/souhait";
import Cv from "./Component/cv";
import Experience from "./Component/experience";

function App(props) {
  const [page, setPage] = useState(4);

  const handleChangePage = (value) => {
    setPage(value);
  };

  if (page === 1) {
    return <Profil1 onChangePage={handleChangePage} />;
  } else if (page === 2) {
    return <Souhait onChangePage={handleChangePage} />;
  } else  if (page === 3)  {
    return <Cv onChangePage={handleChangePage} />;
  } else if (page === 4) {

  }return <Experience onChangePage={handleChangePage} />
}

ReactDOM.render(
  <Container>
    <Row>
      <Col>navbar</Col>
    </Row>
    <Row>
      <Col>
        <App />
      </Col>
    </Row>
  </Container>,
  document.getElementById("root")
);
