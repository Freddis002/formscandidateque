import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

function Souhait(props) {
  const [poste, setPoste] = useState([]);
  const [fonction, setFonction] = useState([]);
  const [salaire, setSalaire] = useState([]);
  const [activite, setActivite] = useState([]);
  const [lieux, setLieux] = useState([]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mb-4 section-title">
              Mon profil - Souhaits
            </h1>
            <Form className="mon-profil-wrapper mb-4">
              <h6> 1 / Quel Poste </h6>
              <div
                key={`inline-checkbox`}
                className="mb-3"
                onChange={(evt) => setPoste(evt)}
              >
                <Form.Label> Type de contrat : </Form.Label> <br />
                <Form.Check inline label="CDI" type="checkbox" id="type1" />
                <br />
                <Form.Check inline label="CDD" type="checkbox" id="type2" />
                <br />
                <Form.Check inline label="Intérim" type="checkbox" id="type3" />
                <br />
                <Form.Check
                  inline
                  label="Contrat de professionalisation"
                  type="checkbox"
                  id="type4"
                />
                <br />
                <Form.Check inline label="Stage" type="checkbox" id="type5" />
                <br />
                <Form.Check
                  inline
                  label="Freelance"
                  type="checkbox"
                  id="type6"
                />
                <br />
                <Form.Check
                  inline
                  label="CDI Intérimaire"
                  type="checkbox"
                  id="type7"
                />
                <br />
                <Form.Check inline label="CUI-CAE" type="checkbox" id="type8" />
                <br />
                <Form.Check inline label="CUI-CIE" type="checkbox" id="type9" />
                <br />
                <Form.Check
                  inline
                  label="Service civique"
                  type="checkbox"
                  id="type10"
                />
                <br />
                <br></br>
                <Form.Label> Temps de travail : </Form.Label> <br />
                <Form.Check
                  inline
                  label="Temps plein"
                  type="radio"
                  id="type1"
                />
                <br />
                <Form.Check
                  inline
                  label="Temps partiel"
                  type="radio"
                  id="type2"
                />
                <br />
                <Form.Check
                  inline
                  label="Indifférent"
                  type="radio"
                  id="type3"
                />
                <br />
                <Form.Group controlId="exampleForm.ControlInput1">
                  <br />
                  <Form.Label>Fonction :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Exemple : Développeur web"
                    onChange={(evt) => setFonction(evt)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <br />
                  <Form.Label>Salaires :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Brut annuel(k€)"
                    onChange={(evt) => setSalaire(evt)}
                  />
                </Form.Group>
                <br />
                <h6> 1 /Quelle entreprise </h6>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <br />
                  <Form.Label>Secteur d'activité :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Exemple: Informatique"
                    onChange={(evt) => setActivite(evt)}
                  />
                </Form.Group>
                <br />
                <Form.Label> Taille de l'entreprise : </Form.Label> <br />
                <Form.Check inline label="TPE" type="checkbox" id="type1" />
                <br />
                <Form.Check inline label="PME" type="checkbox" id="type2" />
                <br />
                <Form.Check inline label="ETI" type="checkbox" id="type3" />
                <br />
                <Form.Check
                  inline
                  label="Grand groupe"
                  type="checkbox"
                  id="type4"
                />
                <br />
                <Form.Group controlId="exampleForm.ControlInput1">
                  <br />
                  <Form.Label>Lieux :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Saisissez un pays,une région ou un département"
                    onChange={(evt) => setLieux(evt)}
                  />
                </Form.Group>
                <br />
                <Button
                  type="submit"
                  onClick={() => props.onChangePage(1)}
                  variant="primary"
                >
                  Retour
                </Button>
                <Button
                  type="submit"
                  onClick={() => props.onChangePage(3)}
                  variant="primary"
                >
                  Suivant
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Souhait;
