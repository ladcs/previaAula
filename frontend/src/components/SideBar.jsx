import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sideBar.css'

const SideBar = ({ listaConteudo, aula }) => {
  return (
    <div className='changePadding'>
      <ul className='sideBar'>
        <li><Link to={`/${aula}`}>Nosso Conteúdo:</Link></li>
        <li><Link to={`/${aula}/porque`}>Por que isso é importante?</Link></li>
        <li>O que aprenderemos?</li>
          <ul className='secundUl'>
            {listaConteudo.map(item => <li> <Link to={`/${aula}/${item.path}`}>{item.nomeConteudo}</Link> </li>)}
          </ul>
        <li><Link to={`/${aula}/exercicios`}>Exercicios:</Link></li>
        <li><Link to={`/${aula}/Recursos`}>Recursos adicionais:</Link></li>
      </ul>
    </div>
  );
};

export default SideBar;
