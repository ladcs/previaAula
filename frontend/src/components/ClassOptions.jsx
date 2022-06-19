import React, { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import api from '../services/api';
import '../styles/initialPage.css';

const endpoint = '/class';


const ClassOptions = () => {
  const [classes, setClasses] = useState([]);
  const [classesOpen, setClassesOpen] = useState([]);
  useEffect(() => {
    api.get(endpoint).then(res => {
      setClasses([...res.data]);
    });
    if (classes.length > classesOpen.length) {
      classes.forEach((_c) => setClassesOpen([...classesOpen, false]));
    }
  });
  function handleClick(i) {
    const newOpen = [...classesOpen];
    newOpen[i] = !newOpen[i];
    setClassesOpen([...newOpen]);
  }
  return (
    <div className='centerOptions'>
      <Navbar bg="light" variant="light">
        <Container>
          <ul className='classOptions'>
            {
              classes
                .map((c, i) => (<li key={ c.id }>
                  <button
                    onClick={ () => handleClick(i) }>
                    { c.class }
                  </button>
                  { classesOpen[i] && c.linksclasses.map((l) => (
                    <ul key={l.name}>
                      <a
                        className='link'
                        target='_blank'
                        rel='noonpener noreferrer'
                        href={l.url}
                        >
                        <li>
                          *{l.name}
                        </li>
                      </a>
                    </ul>
                  )) }
                </li>))
            }
          </ul>
        </Container>
      </Navbar> 
    </div>
  );
}

export default ClassOptions;
