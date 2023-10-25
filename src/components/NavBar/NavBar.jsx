import "../../App.css"

import { Logo } from "./NavBarComponents/Logo"
import { ListNav } from "./NavBarComponents/ListNav/ListNav"
import { CartWidget } from "./NavBarComponents/CartWidget/CartWidget";
 
export const NavBar = () => {
    return (
        <>
        <header>
          <nav>
            <Logo />
            <ListNav />
           <CartWidget />
          </nav>
        </header>
        </>
     )
};