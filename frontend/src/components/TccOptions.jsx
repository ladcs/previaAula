import React, { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '../styles/initialPage.css';
import api from '../services/api';

const endpoint = '/tcc';

const TccOptions = () => {
  const [tccs, setTccs] = useState([]);
  useEffect(()=> {
    api.get(endpoint).then((res) => {
      setTccs([...res.data]);
    })
  })
  return (
    <div className='centerOptions'>
      <Navbar bg="light" variant="light">
            <Container>
              <ul className='classOptions'>
              {
                tccs.map((t) => (
                  <a
                    key={ t.id }
                    className='linkToDownload'
                    target='_blank'
                    rel='noonpener noreferrer'
                    href={ t.link }>
                      <li>
                        { t.tcc }
                      </li>

                  </a>
                ))
              }
              </ul>
            </Container>
          </Navbar> 
    </div>
  );
}

export default TccOptions;