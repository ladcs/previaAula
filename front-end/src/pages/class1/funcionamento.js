import React, { useContext } from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Classes from '../../context/ClassProvider';
import nucleoComum from '../../images/nucleoComum.png';
import doisEnrolamento from '../../images/nucleoDoisLugar.png';
import '../../styles/classPage.css';

const Aula1 = () => {
  const { aula1 } = useContext(Classes);

  return (
    <div>
      <Header />
      <div className='classPage'>
        <SideBar aula='transformador' listaConteudo={ aula1 }/>
        <div>
          <h2> O que é:</h2>
          <p>
            O transformador é basicamente dois enrolamentos, em um entreferro, no qual um fluxo magnético, 
            variavel, passa por eles.
          </p>
          <p>
            O fluxo magnético é gerado por uma fonte de tensão CA, essa fonte é ligado no enrolamento no qual chamamos de 
            primário, o outro enrolamento é conhecido como secundário.
          </p>
          <p>
            Embora o entreferro pode ser utilizado como o ar, normalmente usamos um ferromagnético. Comumente usa-se bloco 
            retangular laminado simples de aço. Assim os enrolamentos podem estar envolta de um mesmo retângulo de aço ou 
            dois retângulos diferentes da seguinte forma:
          </p>
          <img src={ nucleoComum } alt="núcleo comum" className="imagemNucleo" />
          <p>
            Para o primeiro caso, e
          </p>
          <img src={ doisEnrolamento } alt="núcleo" className="imagemNucleo" />
          <p>
            Para o segundo caso.
          </p>
          <p>
            O núcleo, com três pernas ainda é o mais comum, onde o enrolamento no qual fica com a menor tensão seja o enrolamento
            mais interno, por conta de:
          </p>
          <ul>
            <li className="textList"> Simplifica o problema de isolar o enrolamento de alta tensão do núcleo;</li>
            <li className="textList">  Resulta muito menos fluxo de dispersão do que seria o caso se os dois enrolamentos estivessem separados de uma distância no núcleo. </li>
          </ul>
          <p>
            Quando o primário está com um ddp maior que o secundário quer dizer que o transformador é abaixador de tensão, enquanto o ddp maior está no secundário
            o nome do transformador é elevador de tensão.
          </p>
        </div>
        <div/>
      </div>
    </div>
  );
};

export default Aula1;