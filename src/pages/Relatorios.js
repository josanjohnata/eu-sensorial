import React from "react";
import "../style/Relatorios.css";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router";

function Relatorios() {
  const history = useHistory("/eu-sensorial");

  return (
    <div className="relatoriosImg">
      <div>        
        <Nav.Link
          onClick={() => history.push("/eu-sensorial")}
          className="MenuItems relatoriosItem"
        >
          INÍCIO
        </Nav.Link>
        <h1>OPS! ESTAMOS TRABALHANDO NESSA PÁGINA! ;)</h1>
      </div>
    </div>
  );
}

export default Relatorios;
