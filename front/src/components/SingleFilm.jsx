import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function  ({selectedFilm}){
    return (
      <Container>
      <br/>
            <Row>          

              <Col xs={4}>
                <Card style={{ width: '30rem' }}>
                  <Row>
                    <Col className = "text-center">
                    <br/> 
                        <Card.Img  style={{ width: '18rem' }} variant="top" src={selectedFilm.Poster} />
                    </Col>
                  </Row>
                  <Card.Body>
                    <Card.Title>{selectedFilm.Title}</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>{selectedFilm.Genre}</li>
                        <li>{selectedFilm.Year}</li>
                        <li>{selectedFilm.imdbRating}</li>
                        <li>{selectedFilm.Actors}</li>
                        <li>{selectedFilm.Director}</li>
                      </ul>
                    </Card.Text>
                    <Link to = {`/films`}>
                          <Button variant="primary">Volver</Button>
                    </Link>
                  </Card.Body>
                </Card>
                <br/>
                </Col>
            </Row>
          </Container>  


      
    )
}


{/* <div>
        <h4>{`${selectedFilm.Title}`}</h4>
        <img src={selectedFilm.Poster} />
        <ul>
            <li>{selectedFilm.Genre}</li>
            <li>{selectedFilm.Year}</li>
            <li>{selectedFilm.imdbRating}</li>
            <li>{selectedFilm.Actors}</li>
            <li>{selectedFilm.Director}</li>
        </ul> 
      </div> */}