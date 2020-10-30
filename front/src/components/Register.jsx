import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function  ({handleSubmit, handleChangeUser, handleChangePassword, registerSuccess}){
    return (
      <div>
        <br/>
        <Container fluid>
          <Row>
            <Col></Col>
            {registerSuccess ? (
              <Col>
                <div>Registrado con éxito</div>
                <Row> 
                  <Col xs = {6}>
                    <Link to = {`/films`}>
                        <Button variant="primary">Ir a home</Button>
                    </Link>
                  </Col>
                  <Col xs= {6}>
                    <Link to = {`/films/login`}>
                        <Button variant="primary">Ir a login</Button>
                    </Link>
                  </Col>
                </Row>
              </Col>

            ) : (
              <Col xs={5}>
                <Form onSubmit = {handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange = {handleChangeUser} type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control onChange = {handleChangePassword} type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Register</Button>
                </Form>
              </Col>
            )}
            <Col></Col>
          </Row>
        </Container>      
      </div>
    )
}



        


{/* <form onSubmit = {handleSubmit}>
        <input onChange = {handleChangeUser} className="form-control" type="text" placeholder = "usuario" id = "user"/>
        <input  onChange = {handleChangePassword} className="form-control" type="text" placeholder = "contraseña" id = "pass"/>
        <button type="submit">Register</button>
      </form> */}