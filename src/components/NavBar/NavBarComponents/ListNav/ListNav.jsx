import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

export const ListNav = () =>  {
    return (
        <Nav >
            <NavLink to="category/dulce" className="Navlink">
                Dulce
            </NavLink>
            <NavLink to="category/salado" className="Navlink">
                Salado
            </NavLink>
            <NavLink to="category/jugos" className="Navlink">
                Jugos
            </NavLink>
        </Nav>
    )
}
