import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

function Competence(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mb-4 section-title">
              Mon profil - Competences
            </h1>
            <Form className="mon-profil-wrapper mb-4">
              <h6 class="text-left mb-4 section-title"> Vos compétences </h6>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Compétences</Form.Label>
                <Form.Control type="text" placeholder="Exemple: HTML" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <h6 class="text-left mb-4 section-title">
                
                Quelles langues parlez-vous ?
              </h6>
              <Form.Group controlId="exampleForm.ControlSelect1">
                
                <Form.Control as="select">
                  <option selected>Sélectionnez une langue</option>
                  <option>Anglais</option>
              
                </Form.Control>
              </Form.Group>

              <Button
                type="submit"
                onClick={() => props.onChangePage(4)}
                variant="primary"
              >
                Retour
              </Button>
              <Button
                type="submit"
                onClick={() => props.onChangePage(5)}
                variant="primary"
              >
                Valider
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Competence;
