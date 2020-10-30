import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function  ({loggedUser, handleSubmitLogout}){

  return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/films">OMDB</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/films">Buscar películas</Nav.Link>
    </Nav>    
      {loggedUser.email ? (
        <Nav className="ml-auto">
          <Nav.Link href="/user/favs"> {` Mis Perfil \u00a0`}  |</Nav.Link>
          <Nav.Link href="/films/login" onClick = {handleSubmitLogout}>Logout</Nav.Link>
        </Nav>
      ) : (
        <Nav>
          <Nav.Link href="/films/login">Login</Nav.Link>
          <Nav.Link href="/films/register">Register</Nav.Link>
        </Nav>
      )}
  </Navbar>      
    )
}


//Usuario: {`${email.split("@", 1)[0]}

