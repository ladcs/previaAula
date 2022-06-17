import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClassesContext from './ClassProvider';

const Provider = ({ children }) => {
  const [aula1] = useState([{
    nomeConteudo: 'O que é',
    path: 'oQueEh' },
    { 
    nomeConteudo: 'Ideal',
    path: 'trafoIdeal' }]);
  const contextValue = {aula1};

  return (
    <ClassesContext.Provider value= { contextValue }>
      { children }
    </ClassesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
