import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import ClassOptions from '../components/ClassOptions';
import LabOptions from '../components/LabOptions';
import TccOptions from '../components/TccOptions';
import '../styles/global.css';
import Classes from '../context/ClassProvider';

const InitialPage = () => {
  const { setPageLogin } = useContext(Classes);
  setPageLogin(false);
  return (
    <div>
      <Helmet>
        <title>
          Máquinas elétricas
        </title>
      </Helmet>
      <Header />
      <div className = 'conteiner'>
      <ClassOptions />
      <LabOptions />
      <TccOptions />
      </div>
    </div>
  );
};

export default InitialPage;