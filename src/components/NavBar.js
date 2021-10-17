import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../style/NavBar.css';

function NavBar() {
  return (
    <div>
      <section className="navBar">
        <Nav className="justify-content-end NavBarSens" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home" className="MenuItems">
              SOBRE
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="MenuItems">
              HUMOR
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="MenuItems">
              POR QUE...
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="MenuItems">
              BLOG
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown
              title="MENU"
              id="basic-nav-dropdown"
              className="MenuItems"
            >
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
              <NavDropdown.Item href="#contact" className="DropdownItems">
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
