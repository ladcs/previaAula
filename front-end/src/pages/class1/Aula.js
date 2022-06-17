import React, { useContext } from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Classes from '../../context/ClassProvider';
import '../../styles/classPage.css';

const Aula1 = () => {
  const { aula1 } = useContext(Classes);

  return (
    <div>
      <Header />
      <div className='classPage'>
        <SideBar aula='transformador' listaConteudo={ aula1 }/>
        <div>
          <h2> Nosso conteúdo:</h2>
          <p>Um componente importante para a engenharia elétrica, sem dúvidas é o transformador.</p>
          <p>
            O transformador pela característica de mudar a tensão em um condutor, por exemplo 220V para 55V, é fortimente usado
            em todas as áreas da engenharia. Devido a caracteristica dessa mudança, tanto de uma tensão menor para outra maior quanto
            de uma tensão maior para uma menor, ele é facilmente encontrado na parte de eletrotécnico e eletrônica.
          </p>
          <p>
            Assim muito provável que alguns de vocês se deparem com esse componente, por isso começaremos por ele.
          </p>
        </div>
        <div/>
      </div>
    </div>
  );
};

export default Aula1;