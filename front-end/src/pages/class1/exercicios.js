import React, { useContext } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Classes from "../../context/ClassProvider";
import '../../styles/classPage.css';


const Exercicios = () => {
  const { aula1 } = useContext(Classes);
  return(
    <div>
      <Header />
      <div className='classPage'>
        <SideBar listaConteudo={ aula1 } aula='transformador'/>
        <div>
          <h2>Exercícios:</h2>
        </div>
        <div/>
      </div>
    </div>
);
};

export default Exercicios;
