import React from 'react';
import Typed from 'react-typed';
import './Sobre.css';

const Sobre = () => {
  const item = `Sou um programador apaixonado. Entusiasta em escrever softwares bem elaborados e valiosos. Atualmente trabalho na <a href="http://recompensas.minutrade.com/" target="_blank">./minutrade.html</a> , onde atuo como Analista de Sistemas. <br/ >
        Estou profundamente interessado em simplicidade, escrevendo código rápido que também seja fácil de ler e manter, estou em constante busca por melhores práticas e também experimentando coisas novas.
        `;
  return (
    <div className="sobre">
      <Typed
        strings={[item]}
        typeSpeed={40}
      />
    </div>
  );
}

export default Sobre;
