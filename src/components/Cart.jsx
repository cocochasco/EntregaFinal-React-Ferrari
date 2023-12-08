import { useContext, useState } from "react"
import { Container, Table, Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

import {
    getFirestore,
    collection,
    addDoc,
  } from "firebase/firestore";

import { CartContext } from "../contexts/CartContext"


const initialValues = {
    name: "",
    phone:"",
    email:"",
}

export const Cart = () => {
    const { clear, items, onRemove } = useContext(CartContext)
    const [buyer, setBuyer] = useState(initialValues)

    const navigate = useNavigate();

    const total = items.reduce(
        (acumulador, valorActual) => acumulador + (valorActual.quantity * valorActual.price),
        0 
    )

    const handleChange = (event) =>{
        setBuyer(buyer => {
            return{
                ...buyer,
                [event.target.name]: event.target.value
            }
        })
    };
    
    const sendOrder = (ev) => {
        ev.preventDefault()

        const order = {
            buyer: buyer,
            items: items,
        };
    
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
    
        addDoc(orderCollection, order).then(({ id }) => {
          if (id) {
            alert("Su orden: " + id + " ha sido completada!");
            setBuyer(initialValues);
            clear();
          }
        });
      };
    
    if (items.length === 0) {
        return (
            <Container className="d-flex flex-column mt-3 align-items-center w-50" >
                <h1>Carrito de compras vacío</h1>
                <button onClick={() => navigate("/")}>Volver a Home</button>
            </Container>
        )    
    }

    return (
        <Container className="d-flex flex-column mt-3 align-items-center w-50" >
            <h1>Carrito de compras</h1>
            <Table striped bordered hover size="sm" style={{textAlign: "center"}}>
                <thead >
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Imagen</th>
                      <th>Eliminar</th>
                    </tr>
                </thead>
                {items?.map((item) => (
                <tbody>
                <tr key={item.id} >
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td><Button variant="success" onClick={() => onRemove(item.id)}>X</Button></td>
                </tr>
                </tbody>
                
                //Armar tfoot para sumar el total
                ))}   
                <tfoot>
                    <tr>
                        <td>Precio total: {total}</td>
                    </tr>
                </tfoot>  
            </Table>
            <button onClick={clear}>Vaciar carrito</button>
            <hr></hr>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" value={buyer.name} onChange={handleChange} name="name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu email" value={buyer.email} onChange={handleChange} name="email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" required>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" required placeholder="Ingresa tu telefono" value={buyer.phone} onChange={handleChange} name="phone" />
                </Form.Group>
                <Button variant="primary" onClick={sendOrder} type="submit">
                    Comprar
                </Button>
            </Form>            
        </Container>
    )
}






