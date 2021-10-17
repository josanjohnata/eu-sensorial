import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/NavBar.css";

function NavBar() {
  const history = useHistory("/humor", "/eu-sensorial", "/blog");
  return (
    <div>
      <section className="navBar">
        <Nav className="justify-content-end NavBarSens" activeKey="/home">
          <Nav.Item>
            <Nav.Link onClick={() => history.push("/eu-sensorial")} className="MenuItems">
              INÍCIO
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => history.push("/humor")}
              className="MenuItems"
            >
              HUMOR
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => history.push("/porque")} className="MenuItems">
              POR QUE...
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => history.push("/blog")}
              className="MenuItems"
            >
              BLOG
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown
              title="MENU"
              id="basic-nav-dropdown"
              className="MenuItems"
            >
              <NavDropdown.Item
                onClick={() => history.push("/sobre")}
                className="DropdownItems"
              >
                <span>Sobre</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className="DropdownItems">
                <span>Relatório</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="DropdownItems">
                Como Estou?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="DropdownItems">
                Nossos Especialistas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => history.push("#contact")} className="DropdownItems">
                Contatos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
      </section>
    </div>
  );
}

export default NavBar;
