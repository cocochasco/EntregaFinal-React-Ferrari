import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom'

export const Item = ({ item }) => {
    return (
        <>
        <Link to={`/item/${item.id}`}>
            <Card className="m-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {item.pictureURL} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>Precio: ${item.price}</Card.Text>
                    <Link to={`/item/${item.id}`}>
                        <Button variant="primary">Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Link>
        </> 
    )
}
