import React from "react";
import "../style/Sobre.css";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router";

function Sobre() {
  const history = useHistory("/eu-sensorial");

  return (
    <div className="sobreImg">
      <Nav.Link
        onClick={() => history.push("/eu-sensorial")}
        className="MenuItems sobreItem"
      >
        INÍCIO
      </Nav.Link>
      <div>
        {/* <p>
          Eu Sensorial é uma plataforma que ajuda a pessoa a entender quais
          estímulos sensoriais mais impactam sua rotina. Especialmente, no caso
          dos autistas indivíduos com baixa tolerância a determinados estímulos
          como cheiro, luz, toque, etc. Ocorre que outros problemas de saúde
          também sofrem influência dos estímulos ambientais, como a enxaqueca e
          ansiedade. Por isso, criamos o Eu Sensorial, para ajudar as pessoas a
          compreenderem o que mais interfere no seu dia a dia, e reduzir esses
          estímulos. Assim como, permitir que profissionais melhorem seu
          atendimento. Além, de fazer a ponte entre quem busca ajuda e
          profissionais.
        </p> */}
      </div>
    </div>
  );
}

export default Sobre;
