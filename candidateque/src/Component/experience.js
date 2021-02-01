import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);

function Experience(props) {
  const [date, setDate] = useState(null);

  const [datefin, setDateFin] = useState(null);

  const handleDateSelect = (value) => {
    setDate(value);
  };

  const handleDateSelect1 = (value) => {
    setDateFin(value);
  };

  const [activite, setActivite] = useState([]);

  const [lieux, setLieux] = useState([]);

  const [niveau, setNiveau] = useState([]);

  const [datedebut, setDate1] = useState(null);

  const [datefinn, setDateFin2] = useState(null);

  const handleDateSelect2 = (value) => {
    setDate1(value);
  };

  const handleDateSelect3 = (value) => {
    setDateFin2(value);
  };

  const [nature, setNature] = useState([]);

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
              <h6 class="text-left mb-4 section-title">
                Expérience professionnelle
              </h6>
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
              <Form.Label>Debut : </Form.Label>
              <br />
              <DatePicker
                locale="fr-FR"
                dateFormat="dd/MM/yyyy"
                selected={date}
                onSelect={handleDateSelect} //when day is clicked
                //onChange={handleDateChange} //only when value has changed
              />
              <br />
              <Form.Label>Fin : </Form.Label>
              <br />
              <DatePicker
                locale="fr-FR"
                dateFormat="dd/MM/yyyy"
                selected={datefin}
                onSelect={handleDateSelect1} //when day is clicked
                //onChange={handleDateChange} //only when value has changed
              />
              <br />
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Entreprise</Form.Label>

                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Secteur d'activité</Form.Label>
                <Form.Control as="select" onChange={(evt) => setActivite(evt)}>
                  <option selected>Activité</option>
                  <option>Exemple</option>
                </Form.Control>
              </Form.Group>
              <Form.Label> Taille de l'entreprise : </Form.Label> <br />
              <Form.Check inline label="TPE" type="radio" id="type1" />
              <br />
              <Form.Check inline label="PME" type="radio" id="type2" />
              <br />
              <Form.Check inline label="ETI" type="radio" id="type3" />
              <br />
              <Form.Check inline label="Grand groupe" type="radio" id="type4" />
              <br />
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Lieux</Form.Label>
                <Form.Control as="select" onChange={(evt) => setLieux(evt)}>
                  <option selected>Lieux</option>
                  <option>Exemple</option>
                </Form.Control>
              </Form.Group>
              <h6 class="text-left mb-4 section-title">Formation</h6>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Formation :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Exemple: Master Informatique"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Expérience dans le métier :</Form.Label>
                <Form.Control as="select" onChange={(evt) => setNiveau(evt)}>
                  <option selected>Sélectionnez le niveau de formation</option>
                  <option value={0}>Secondaire</option>
                  <option value={1}>Bac</option>
                  <option value={2}>Bac+1</option>
                  <option value={3}>Bac+2</option>
                  <option value={4}>Bac+3</option>
                  <option value={5}>Bac+4</option>
                  <option value={6}>Bac+5</option>
                </Form.Control>
              </Form.Group>
              <Form.Label>Début </Form.Label>
              <br />
              <DatePicker
                locale="fr-FR"
                dateFormat="dd/MM/yyyy"
                selected={datedebut}
                onSelect={handleDateSelect2} //when day is clicked
                //onChange={handleDateChange} //only when value has changed
              />
              <br />
              <Form.Label>Fin : </Form.Label>
              <br />
              <DatePicker
                locale="fr-FR"
                dateFormat="dd/MM/yyyy"
                selected={datefinn}
                onSelect={handleDateSelect3} //when day is clicked
                //onChange={handleDateChange} //only when value has changed
              />
              <br />
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Organisme : </Form.Label>
                <br />
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Disponibilité</Form.Label>
                <Form.Control as="select" onChange={(evt) => setNature(evt)}>
                  <option selected>Organisme</option>
                  <option>Ecole de commerce ou de gestion</option>
                  <option>Ecole ingénieurs</option>
                  <option>Ingénieur des universités</option>
                  <option>Autre école de spécialité</option>
                  <option>Diplome universitaire</option>
                  <option>Autre</option>
                </Form.Control>
              </Form.Group>
              <Button
                type="submit"
                onClick={() => props.onChangePage(3)}
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
    </div>
  );
}

export default Experience;
