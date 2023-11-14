import { Container } from "react-bootstrap"

export const ItemDetail = ({item}) => {
    return (
        <Container className="d-flex flex-column mt-3 align-items-center w-50" >
            <h1>Detalle del producto</h1>
            <h2>{item.title}</h2>
            <img src={item.pictureURL} alt={item.title} style={{ width: '35rem' }}/>
            <p className="p-4" style={{ width: '35rem' }}>{item.description}</p>
            <h3>Precio: ${item.price}</h3>
        </Container>


    )
}