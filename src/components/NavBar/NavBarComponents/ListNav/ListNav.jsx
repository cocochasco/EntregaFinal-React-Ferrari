import { NavBarListItem } from './ListItemNav'

export const ListNav = () =>  {
    return (
        <ul className="ul__listaNav">
            <NavBarListItem li="Nosotras" href="#"/>
            <NavBarListItem li="Salado" href="#"/>
            <NavBarListItem li="Dulce" href="#"/>    
        </ul>
    )
}