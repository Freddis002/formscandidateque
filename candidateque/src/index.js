import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Row,Col, Container}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Profil1 from './Component/Profil1'

function App (props) {

  const [page,setPage]=useState(1);

  const handleChangePage =(value)=>{
      setPage(value);
  }
 
  useEffect(()=>{

  },[page]);


return(
  <Container>
     <Row>
    <Col>navbar</Col>
  </Row>
  <Row>
    <Col>
    <Profil1 
    onChangePage={(value)=>handleChangePage(value)}
    numeroPage={page}
    />
    </Col>
  </Row>
</Container>
)

}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

