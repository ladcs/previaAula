import React, { useContext } from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Classes from '../../context/ClassProvider';
import '../../styles/classPage.css';

const TrafoIdeal = () => {
  const { aula1 } = useContext(Classes);

  return (
    <div>
      <Header />
      <div className='classPage'>
        <SideBar aula='transformador' listaConteudo={ aula1 }/>
        <div>
          <h2> Transformador Ideal: </h2>
        </div>
        <div/>
      </div>
    </div>
  );
};

export default TrafoIdeal;