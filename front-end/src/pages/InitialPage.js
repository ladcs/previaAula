import React from 'react';
import Header from '../components/Header';
import ClassOptions from '../components/ClassOptions';
import LabOptions from '../components/LabOptions';
import TccOptions from '../components/TccOptions'

const InitialPage = () => {
  return (
    <div>
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