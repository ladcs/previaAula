import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/initialPage.css'

const ClassOptions = () => {
  return (
    <div className='centerOptions'>
      <Navbar bg="light" variant="light">
            <Container>
              <ul className='classOptions'>
                <li><Link to="/transformador"> Aula 1: Transformadores </Link></li>
                <li>Aula 2: Transformador: circuito equivalente</li>
                <li> ... </li>
                <li>Aula N: MIT</li>
              </ul>
            </Container>
          </Navbar> 
    </div>
  );
}

export default ClassOptions;
