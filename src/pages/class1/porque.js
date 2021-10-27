import React, { useContext } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Classes from "../../context/ClassProvider";
import '../../styles/classPage.css';


const PorQue = () => {
  const { aula1 } = useContext(Classes);
  return (
    <div>
      <Header />
      <div className='classPage'>
        <SideBar listaConteudo={ aula1 } aula='transformador'/>
        <div>
          <h2> Por que isso é importante?</h2>
          <p>
            Em setembro de 1882 em Nova York, é visto o primeiro sistema para distribuição de energia elétrica, inventado por
            Thomas A. Edison.
          </p>
          <p>
            Edison projetou uma distribuição de 120 V CC, para poder ligar lâmpadas incandescentes. Como essa tensão é baixa e CC,
            a poucas quadras deveria haver outro sistema de distribuição, devido a queda de tensão na transmição, uma outra alternativa
            seria colocar uma alta corrente.
          </p>
          <p>
            Para suprir esse problema, optou-se em usar corrente alternado com a nova invenção, o transformador.
          </p>
          <p>Além dessa mudança na tensão podemos ainda: </p>
          <ul>
            <li className='textList'>
              Casamento de impedância;
            </li>
            <li className='textList'>
              Isolamento do circuito.
            </li>
          </ul>
        </div>
        <div/>
      </div>
    </div>
  );
}

export default PorQue;
