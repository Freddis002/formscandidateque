import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";



function Cv(props) {

  
  
  return (
    
    
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mb-4 section-title">
              Mon profil - CV & Lettre de motivation
            </h1>
            <Form className="mon-profil-wrapper mb-4">
              <Form.Group>
                <div className="mb-3">
                  <Form.File id="formcheck-api-regular">
                    <Form.File.Label>
                      Sélectionnez le cv à joindre sur votre profil
                    </Form.File.Label>
                    <Form.File.Input />
                  </Form.File>
                </div>
              </Form.Group>

              <Button
                type="submit"
                onClick={() => props.onChangePage(2)}
                variant="primary"
              >
                Retour
              </Button>

              <Button
                type="submit"
                onClick={() => props.onChangePage(4)}
                variant="primary"
              >
                Suivant
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Cv;



