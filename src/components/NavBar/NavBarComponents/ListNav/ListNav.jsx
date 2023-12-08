import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

/* import products from "../../../../data/products-onesta.json"

const categories = products.map( item => item.category)

const sameCategories = new Set(categories) */

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

/* export const ListNav = () =>  {
    return (
        <Nav>
            {[...sameCategories].map(category => 
            <NavLink to={`/category/${category}`}>
                <span className="nav-link">{category}</span>
            </NavLink>
            )}
        </Nav>
    )
} */