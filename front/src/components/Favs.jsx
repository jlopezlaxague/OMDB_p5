import React from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function  ({favs, handleUserFavourites, loggedUser}){
    return (
      <div>
        <Container> 
          <Col xs ={2}>
          <div>{console.log(favs)}</div>
            <Button onClick = {() => handleUserFavourites({userId : loggedUser.id})}>Mis favoritos</Button>
          </Col>
          <Col xs={12}>

          <Container>
            <Row>

              { favs && favs.length > 0 ? (
              favs.map((film) => 
                <div key={film.imdbid}>

                  <Col xs={4}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>{film.title}</Card.Title>
                      </Card.Body>
                    </Card>
                    <br/>
                  </Col>
                
                </div>)
                ) : <Col xs={4}><div>{``}</div></Col> //queda hacer un cartel de "no se enconotró nada"
              }              

            </Row>
          </Container> 

          
          </Col>

        </Container>

      </div>
      
    )
}