import '../styles/global.css';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Input from '../components/Input';
import Classes from '../context/ClassProvider';
import { handleOnChange } from '../util/handleFunctions';

export default function InitialPage() {
  const { setLogged, setPageLogin } = useContext(Classes);
  const [user, setUser] = useState({
    userName: '',
    password: '',
  });

  setPageLogin(true);


  const { userName, password } = user;
  return (
    <div>
      <Helmet>
        <title>
          Máquinas elétricas | Login
        </title>
      </Helmet>
      <Header />
      <div className = 'conteiner'>
        <Input
          label='Usuário'
          type='text'
          value={ userName }
          id='userName'
          onChange={ (e) => handleOnChange(e, user, setUser) }
        />
        <Input
          label='Senha'
          type='password'
          value={ password }
          id='password'
          onChange={ (e) => handleOnChange(e, user, setUser) }
        />
      </div>
    </div>
  );
};
