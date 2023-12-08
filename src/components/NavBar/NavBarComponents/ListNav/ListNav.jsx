import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

export const ListNav = () =>  {
    return (
        <Nav>
            <NavLink to="category/dulce">
                Dulce
            </NavLink>
            <NavLink to="category/salado">
                Salado
            </NavLink>
            <NavLink to="category/jugos">
                Jugos
            </NavLink>
        </Nav>
    )
}