import React from "react";
import "../style/Contatos.css";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router";

function Contatos() {
  const history = useHistory("/eu-sensorial");

  return (
    <div className="ContatosImg">
      <Nav.Link
        onClick={() => history.push("/eu-sensorial")}
        className="MenuItems ContatosItem"
      >
        INÍCIO
      </Nav.Link>      
    </div>
  );
}

export default Contatos;
