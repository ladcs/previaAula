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
              <Link className='linkToDownload' to="/transformador"><li> Aula 1: Transformadores </li></Link>                <li>TCC 2: Transformador: circuito equivalente</li>
                <li> ... </li>
                <li>Lab N: MIT</li>
              </ul>
            </Container>
          </Navbar> 
    </div>
  );
}

export default ClassOptions;