import React from 'react';
import Provider from '../../frontend/src/context/Provider';
import Routes from '../../frontend/src/Routes/Routes';
import './App.css';


function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
