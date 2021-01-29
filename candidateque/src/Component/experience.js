import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)



function Experience() {

    const [date, setDate] = useState(null);

    const handleDateSelect = (value) => {
        setDate(value);
    }

   // const [locale, setDefaultLocale] = useState('fr')

// value = valeur
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mb-4 section-title">
              Mon profil - Expériences
            </h1>
            <Form className="mon-profil-wrapper">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Poste</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Exemple: Developpeur web"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Fonction</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Exemple: Developpeur web"
                />
              </Form.Group>

              <DatePicker
                locale="fr"
                selected={date}
                onSelect={handleDateSelect} //when day is clicked
                //onChange={handleDateChange} //only when value has changed
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
