import { NavBarListItem } from './ListItemNav'

export const ListaNav = () =>  {
    return (
        <ul className="ul__listaNav">
            <NavBarListItem li="Nosotras" href="#"/>
            <NavBarListItem li="Salado" href="#"/>
            <NavBarListItem li="Dulace" href="#"/>           
        </ul>
    )
}