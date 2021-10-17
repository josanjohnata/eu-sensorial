import React from "react";
import "../style/ComoEstou.css";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router";

function ComoEstou() {
  const history = useHistory("/eu-sensorial");

  return (
    <div className="ComoEstouImg">
      <div>        
        <Nav.Link
          onClick={() => history.push("/eu-sensorial")}
          className="MenuItems ComoEstouItem"
        >
          INÍCIO
        </Nav.Link>
        <h1>OPS! ESTAMOS TRABALHANDO NESSA PÁGINA! ;)</h1>
      </div>     
    </div>
  );
}

export default ComoEstou;
