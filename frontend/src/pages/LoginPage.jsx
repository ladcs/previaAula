import '../styles/global.css';
import 'reactjs-popup/dist/index.css';
import '../styles/LoginPage.css'
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Input from '../components/Input';
import Classes from '../context/ClassProvider';
import { handleOnChange } from '../util/handleFunctions';
import api from '../services/api';
import { Link } from 'react-router-dom';

const endpoit = '/login';

const DontLogged = (userName, password, userIn, setUser, handleOnClick, errorLogin) => {
  return (<div className = 'conteiner'>
    <Input
      label='Usuário'
      type='text'
      value={ userName }
      id='userName'
      onChange={ (e) => handleOnChange(e, userIn, setUser) }
    />
    <Input
      label='Senha'
      type='password'
      value={ password }
      id='password'
      onChange={ (e) => handleOnChange(e, userIn, setUser) }
    />
    { errorLogin && <div>usuário ou senha invalida</div>}
    <button
    type='button'
    onClick={ (e) => handleOnClick(e) }
    >
      Entrar
    </button>
  </div>);
}

const Logged = (setLogged) => {
  return(
    <div className='centerOptions'>
      <ul className='classOptions'>
        <li className='linkToDownload'>
          <Link to='/Register'>
            Registrar novo usuário
          </Link>
        </li>
        <li className='linkToDownload'>
          <Link to='/item'>
            Adicionar/modificar itens da pagina inicial
          </Link>
        </li>
        <li className='linkToDownload'>
          <Link to='/'>
            Pagina Inicial
          </Link>
        </li>
        <li>
          <button type='button' onClick={() => setLogged(false)}>
            Sair
          </button>
        </li>
      </ul>
    </div>
  )
}

async function requestToLogin(body) {
  const { userName, password} = body;
  const { data } = await api.post(endpoit, { user: userName, password })
  return data;
}

export default function InitialPage() {
  const { setLogged, setPageLogin, logged } = useContext(Classes);
  const [userIn, setUser] = useState({
    userName: '',
    password: '',
  });
  const [errorLogin, setErrorLogin] = useState(false);
  useEffect(() => setPageLogin(true))

  async function handleOnClick(e) {
    e.preventDefault();
    try {
      const { token, user } = await requestToLogin(userIn);
        localStorage.setItem('user', JSON.stringify({ ...user }));
        setLogged(true);
        api.defaults.headers.common.Authorization = token;
    } catch (err) {
      setLogged(false);
      setErrorLogin(true);
    }
  }

  const { userName, password } = userIn;
  return (
    <div>
      <Helmet>
        <title>
          Máquinas elétricas | Login
        </title>
      </Helmet>
      <Header />
      {!logged ? DontLogged(userName, password, userIn, setUser, handleOnClick, errorLogin) : Logged(setLogged) }
    </div>
  );
};
