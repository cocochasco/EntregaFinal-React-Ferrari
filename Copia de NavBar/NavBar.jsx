import "./css/NavBar.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
/* import Nav from 'react-bootstrap/Nav'; */
import Navbar from 'react-bootstrap/Navbar';
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Logo } from "./NavBarComponents/Logo"
import { ListaNav } from "./NavBarComponents/ListNav/ListNav"
import { CartWidget } from "./NavBarComponents/CartWidget/CartWidget";
 
export const NavBar = () => {
    return (
        <>
        {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
              <Logo />
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Secciones
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListaNav />
                    <CartWidget />              
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
     )
};