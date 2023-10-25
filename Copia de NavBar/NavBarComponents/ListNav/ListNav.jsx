import { NavBarListItem } from './ListItemNav'

export const ListaNav = () =>  {
    return (
        <ul className="ul__listaNav">
            <NavBarListItem li="Nosotras" href="#"/>
            <NavBarListItem li="Salado" href="#"/>
            <NavBarListItem li="Dulace" href="#"/>    
        {/*     <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>      */}  
        </ul>
    )
}