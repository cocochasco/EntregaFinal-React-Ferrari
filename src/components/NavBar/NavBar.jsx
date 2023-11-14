import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import "../../App.css"

import { Logo } from "./NavBarComponents/Logo"
import { ListNav } from "./NavBarComponents/ListNav/ListNav"
import { CartWidget } from "./NavBarComponents/CartWidget/CartWidget";
 
export const NavBar = () => {
    return (
        <>
        <header>
          <nav>
            <Navbar className='nav' >
              <Container>
                  <Logo />
                  <ListNav />
                  <CartWidget />
                </Container>
            </Navbar>  
          </nav>
        </header>
        </>
     )
};