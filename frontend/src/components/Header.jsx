import React, { useContext } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Classes from '../context/ClassProvider';
import Deel from '../images/simbolo_deel.jpg';
import UEL from '../images/simbolo_uel.jpg';
import '../styles/Header.css';

const Header = () => {
  const {logged, pageLogin} = useContext(Classes);
  const urlPortal = 'https://portal.uel.br/portais/pages/portais.php';
  const urlEstude = 'https://portal.uel.br/estude-na-uel/';
  const urlOportunidades = 'https://portal.uel.br/oportunidades/';
  const urlTranparecia = 'https://sistemas.uel.br/portaltransparencia/index';
  const urlUEL = 'https://portal.uel.br/home/';
  const urlCTU = 'https://sites.uel.br/ctu/';

  return(
    <header>
      <div className='externalNav'>
        <div className='externalNavL'>
          <Navbar bg="light" variant="light">
            <Container>
              <ul>
                <li><a href={ urlPortal }> Portais </a></li>
                <li><a href={ urlEstude }> Estude na UEL </a></li>
                <li><a href={ urlOportunidades }> Oportunidades </a></li>
                <li><a href={ urlTranparecia }> Transparência </a></li>
              </ul>
            </Container>
          </Navbar>
        </div>
        <div className='externalNavR'>
        <Navbar bg="light" variant="light">
            <Container>
              <ul>
                {!(logged || pageLogin) && <li><Link to='/login'> Login </Link></li> }
                <li><a href={ urlUEL }> Voltar para UEL </a></li>
                <li><a href={ urlCTU }> Voltar para CTU </a></li>
              </ul>
            </Container>
        </Navbar>
        </div>
      </div>
      <div className='icones'>
        <img src={ Deel } alt="icone Deel" className='DEEL' />
        <h1><Link to='/'>Engenharia elétrica - Máquinas elétricas</Link></h1>
        <img src={ UEL } alt="icone UEL" className='UEL'/>
      </div>
    </header>
  );
};

export default Header;
