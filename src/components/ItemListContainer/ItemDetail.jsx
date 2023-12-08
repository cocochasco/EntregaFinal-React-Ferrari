import { useContext } from "react"

import { Container, Card } from "react-bootstrap"

import { ItemCount } from "../ItemCount"
import { CartContext } from "../../contexts/CartContext"

 
export const ItemDetail = ({item, stock, stateCount}) => {
    const { onAdd } = useContext(CartContext)

    const add = (quantity) => {
            onAdd(item, quantity) 
    }

    return (
        <Container className="d-flex flex-column mt-3 align-items-center w-50" >
            <Card style={{ width:'32rem'}} className="d-flex flex-column align-items-center">
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Precio: ${item.price}</Card.Subtitle>
                    <Card.Img variant="top" src={item.pictureURL} alt={item.title} style={{ width: '28rem'}} />
                    <Card.Text>{item.description}</Card.Text>
                    <ItemCount onAdd={add} stock={item.stock} initial={1} />
                    <Card.Footer className="text-muted">Stock: {item.stock}</Card.Footer>
                </Card.Body>
            </Card>
        </Container>
    )
}


/* 
function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.pictureURL} alt={item.title} style={{ width: '35rem', heigth:'70rem' }} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Precio: ${item.price}</Card.Subtitle>
        <Card.Text>
        {item.description}
        </Card.Text>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
        <Button variant="primary">Stock: {item.stock}</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample; */