import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Input from '../components/Input';
import Classes from '../context/ClassProvider';
import api from '../services/api';
import { handleOnChange } from '../util/handleFunctions';

const endpoint = '/login/register';

const newUserToAPI = async (body)=> {
  await api.post(endpoint, body);
}

export default function RegisterPage() {
  const [newUser, setNewUser] = useState({
    user: '',
    password: '',
  });
  const [errorRegister, setErrorRegister] = useState(false);
  const { logged } = useContext(Classes);
  if (!logged) return <Redirect to='/login' />

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      await newUserToAPI(newUser);
      setErrorRegister(false);
    } catch (error) {
      setErrorRegister(true);
    }
  }

  const { user, password } = newUser;
  return (
    <div>
      <Helmet>
        <title>
          Máquinas elétricas | Registro
        </title>
      </Helmet>
      <Header />
      <Input
      label='Novo Usuário'
      type='text'
      value={ user }
      id='newUser'
      onChange={ (e) => handleOnChange(e, newUser, setNewUser) }
      />
      <Input
        label='Senha'
        type='password'
        value={ password }
        id='password'
        onChange={ (e)=> handleOnChange(e, newUser, setNewUser)}
      />
      { errorRegister && <div>Usuário já existe</div> }
      <button
      type='button'
      onClick={ (e)=> handleOnClick(e)}
      >
        Cadastrar
      </button>

    </div>
  );
}