import "./css/NavBar.css"

import { Logo } from "./NavBarComponents/Logo"
import { ListaNav } from "./NavBarComponents/ListNav/ListNav"
import { CartWidget } from "./NavBarComponents/CartWidget/CartWidget";
 
export const NavBar = () => {
    return (
        <>
        <nav>
          <Logo />
          <ListaNav />
          <CartWidget />
        </nav>
        </>
     )
};