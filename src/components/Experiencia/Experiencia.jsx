import React from 'react';
import Typed from 'react-typed';

const Experiencia = () => {
  const text = `
        Analista de sistemas <br />
        Minutrade <br />
        outubro de 2017 – atualmente <br />
        Belo Horizonte - MG <br /> <br />

        Analista de Desenvolvimento <br />
        Indústria-i <br />
        dezembro de 2009 – setembro de 2017  7 anos 10 meses <br />
        Belo Horizonte - MG<br /><br />

        Estágio <br />
        Empresa 1 <br />
        fevereiro de 2009 – dezembro de 2009  11 meses <br />
        Belo Horizonte - MG`;
  return (
    <div className="Home">
      <Typed
        strings={[text]}
        typeSpeed={40}
      />
    </div>
  );
}

export default Experiencia;
