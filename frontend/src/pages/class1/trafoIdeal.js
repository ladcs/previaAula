import React, { useContext } from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Classes from '../../context/ClassProvider';
import RelIV from '../../images/relacaoTensaoCorrente.png'
import VI from '../../images/VI.png';
import RelNIV from '../../images/RNIV.png';
import Rel from '../../images/relacaoTransformador.png';
import ilusTrans from '../../images/ilustraçãoTrafo.png'
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
          <p>
            Sem perdas nos enrolamentos, o transformador ideal mantém a potência de entrada igual a potência de saída, nesse caso P<sub>1</sub> = P <sub> 2</sub>.
          </p>
          <p>
            Com isso podemos observar:
          </p>
            <img src={ VI } alt='potência' />
          <p>
            Nesse caso há uma relação entre tensões e correntes:
          </p>
          <img src={ RelIV } alt='V1 sobre V2 = I1 sobre I2' />
          <p> 
            Nesse caso como há uma indutância mútua, pela lei de Faraday temos que a tensão depende do número de espiras, sendo esse
            o número de espiras e a tensão proporcional, assim a relação pode ser descrita como:
          </p>
          <img src={ RelNIV } alt='N1 sobre N2 = V1 sobre V2 = I1 sobre I2' />
          <p>
            Vale ressaltar que N<sub>1</sub> é o número de espiras do primeiro enrolamento, e N<sub>2</sub> do segundo enrolamento.
          </p>
          <img src={ Rel } alt='N1 sobre N2 = V1 sobre V2 = I1 sobre I2 = a' />
          <p>
            Assim a relação de transformação a pode indicar se o transformador é abaixador, 0 &lt; a &lt; 1, ou elevador, a &gt; 1. Levando
            tudo isso em conta podemos ter a representação do transformador ideal da seguinte maneira.
          </p>
          <img src={ ilusTrans } alt='ilustração transformador' />
          <p>
            Com o ponto indicando a polaridade da tensão e corrente no lado do  enrolamento secundário do transformador, da seguinte maneira:
          </p>
          <ul>
            <li className='textList'>
            Se a tensão primária for positiva no terminal com ponto (marca) do enrolamento, em relação ao terminal sem ponto, 
            então a tensão secundária também será positiva no terminal com ponto. As polaridades de tensão são as mesmas em 
            relação aos pontos de cada lado do núcleo.
            </li>
            <li className='textList'>
              Se a corrente primária do transformador fluir para dentro do terminal com ponto no enrolamento primário, 
              então a corrente secundária fluirá para fora do terminal com ponto no enrolamento secundário.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrafoIdeal;