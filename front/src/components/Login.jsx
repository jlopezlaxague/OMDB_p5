import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function  ({handleSubmit, handleChangeUser, handleChangePassword, beingVerified}){
    return (
      <div>
        <br/>
        <Container fluid>
          <Row>
            <Col></Col>
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
                <Button variant="primary" type="submit">Login</Button>
                <Form.Text className="text-muted">
                  <p>Esto puede tardar hasta 10 segundos...</p>
                </Form.Text>
              </Form>
            </Col>   
            <Col></Col>              
          </Row>
        </Container>    
      </div>
    )
}