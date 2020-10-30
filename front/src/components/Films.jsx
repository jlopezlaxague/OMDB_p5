import React from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function  ({ films, handleChange, handleSubmit, loggedUser, handleSubmitFavourites}){
    return (
      <div>
        <br/>
          <Container>
            <Row>
              <Col></Col>
              <Col xs={8}>
              <Form onSubmit = {handleSubmit}>
                <Form.Row className="align-items-center">
                  <Col className="my-1">
                    <Form.Label htmlFor="inlineFormInputName" srOnly>
                      Name
                    </Form.Label>
                    <Form.Control onChange={handleChange}  id="inlineFormInputName" placeholder="Busca tu película"/>
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Button type="submit">Buscar</Button>
                  </Col>
                </Form.Row>
              </Form>       
              </Col>
              <Col></Col>
            </Row>
          </Container>

          <br/>
          <Container>
            <Row>

              { films.Search && films.Search.length > 0 ? (
              films.Search.map((film) => 
                <div key={film.imdbID}>

                  <Col xs={4}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={film.Poster} />
                      <Card.Body>
                        <Card.Title>{film.Title}</Card.Title>
                        <Card.Text>{`Año de estreno: ${film.Year}`}</Card.Text>
                        {loggedUser.email ? (
                          <Row>
                            <Col xs={8}>
                              <Link to = {`/films/${film.imdbID}`}>
                                <Button variant="primary">Ver detalles</Button>
                              </Link>
                            </Col>
                            <Col xs={1}>
                              <Link to = {``}>
                                <Button 
                                  onClick={() => handleSubmitFavourites({title: film.Title, imdbid: film.imdbID, userId : loggedUser.id})} 
                                  variant="primary">🤍</Button>
                              </Link>
                            </Col>
                          </Row>
                        ): (
                          <Link to = {`/films/${film.imdbID}`}>
                            <Button variant="primary">Ver detalles</Button>
                          </Link>
                        )}
                      </Card.Body>
                    </Card>
                    <br/>
                  </Col>
                
                </div>)
                ) : <Col xs={4}><div>{``}</div></Col> //queda hacer un cartel de "no se enconotró nada"
              }              

            </Row>
          </Container>    
        
      </div>
    )
}