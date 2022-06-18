import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClassesContext from './ClassProvider';

const Provider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  
  const contextValue = {logged, setLogged};

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
