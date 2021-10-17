import React from "react";
import "../style/Especialistas.css";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router";

function Especialistas() {
  const history = useHistory("/eu-sensorial");

  return (
    <div className="EspecialistasImg">
      <div>        
        <Nav.Link
          onClick={() => history.push("/eu-sensorial")}
          className="MenuItems EspecialistasItem"
        >
          INÍCIO
        </Nav.Link>
        <h1>OPS! ESTAMOS TRABALHANDO NESSA PÁGINA! ;)</h1>
      </div>     
    </div>
  );
}

export default Especialistas;
