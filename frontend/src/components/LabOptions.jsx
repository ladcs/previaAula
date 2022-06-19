import React, { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import api from '../services/api';
import '../styles/initialPage.css';

const endpoint = 'lab';

const LabsOptions = () => {
  const [labs, setLabs] = useState([]);
  useEffect(()=> {
    api.get(endpoint).then((res) => {
      setLabs([...res.data]);
    });
  })
  return (
    <div className='centerOptions'>
      <Navbar bg="light" variant="light">
            <Container>
              <ul className='classOptions'>
                {labs.map((l) => (<a key={ l.id }
                  className='linkToDownload'
                  target='_blank'
                  rel='noonpener noreferrer'
                  href={l.link}>
                  <li> 
                    { l.labClass }
                  </li>
                </a>))}
              </ul>
            </Container>
          </Navbar> 
    </div>
  );
}

export default LabsOptions;