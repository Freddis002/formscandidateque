
import React, { useState } from'react'
import {Row,Col, Container,Form,Button} from 'react-bootstrap'
import Souhait from './souhait';


function Profil1(props) {

  const [metier,setMetier]=useState([]);
  const [experience, setExperience]=useState([]);
  const [poinCles,setPointCles]=useState([]);
  const [mobilité,setMobilite]=useState([]);
  

  


console.log(props.numeroPage);

if (props.numeroPage === 1){
  return (
    
    <div>
   <Container>
    <Row>
   <Col>

<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Métier souhaité</Form.Label>
    <Form.Control type="text" placeholder="Exemple : Développeur web" onChange={evt=>setMetier(evt)}/>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Expérience dans le métier</Form.Label>
    <Form.Control as="select" onChange={evt=>setExperience(evt)}>
      <option selected>Précisez la durée</option>
      <option>Débutant</option>
      <option>1 an d'expérience</option>
      <option>2 ans d'expérience</option>      
      <option>3 ans d'expérience</option>
      <option>4 ans d'expérience</option>
      <option>5 ans d'expérience</option>
      <option value={1}>6 ans d'expérience</option>
      <option>7 ans d'expérience</option>
      <option>8 ans d'expérience</option>
      <option>9 ans d'expérience</option>
      <option>10 ans et + </option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Points clés</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={evt=>setPointCles(evt)} />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Disponibilité</Form.Label>
    <Form.Control as="select">
      <option selected>Précisez vos Disponibilité</option>
      <option>Immédiatement</option>
      <option>Moins de 3 mois</option>
      <option>Entre 3 et 6 mois</option>      
      <option>Plus de 6 mois</option>
      
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Mobilité</Form.Label>
    <Form.Control as="select" onChange={evt=>setMobilite(evt)}>
      <option selected>Précisez vos Mobilités</option>
      <option>Département</option>
      <option>Région</option>
      <option>France Entière</option>      
      <option>Europe</option>
      <option>Reste du monde</option>
      
    </Form.Control>
  </Form.Group>

  <Button  type='submit' onClick={()=>props.onChangePage(2)} variant="primary">Suivant</Button>
  
  











</Form>
   
   
   </Col>
        
       </Row>
       </Container>
    

    </div>
  );

  }
  else if (props.numeroPage === 2){
    return (

      <Souhait/>
      
    );
  }
}

export default Profil1;

