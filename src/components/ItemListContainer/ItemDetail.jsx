import { useContext } from "react"

import { Container } from "react-bootstrap"

import { ItemCount } from "../ItemCount"
import { CartContext } from "../../contexts/CartContext"

 
export const ItemDetail = ({item, stock, stateCount}) => {
    const { onAdd } = useContext(CartContext)

    const add = (quantity) => {// HACER: Si el item no existe crear objeto, si el item existe agregar cantidades dentro del objeto ya creado.
            onAdd(item, quantity) 
    }

     

    return (
        <Container className="d-flex flex-column mt-3 align-items-center w-50" >
            <h1>Detalle del producto</h1>
            <h2>{item.title}</h2>
            <img src={item.pictureURL} alt={item.title} style={{ width: '35rem' }}/>
            <p className="p-4" style={{ width: '35rem' }}>{item.description}</p>
            <h3>Precio: ${item.price}</h3>
            <h3>Stock: {item.stock}</h3>
            <ItemCount onAdd={add} stock={item.stock} initial={1} />
        </Container>


    )
}