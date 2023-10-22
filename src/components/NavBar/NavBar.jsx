import "./css/NavBar.css"

import { Logo } from "./NavBarComponents/Logo"
import { ListaNav } from "./NavBarComponents/ListaNav"
import { CartWidget } from "./NavBarComponents/CartWidget";

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