import { Link } from "react-router-dom"
import carrito from "../../../../images/carrito.svg"
import { Notification } from "./Notification"
import { useContext } from "react"
import { CartContext} from "../../../../contexts/CartContext"

export const CartWidget = () => {
    const {items} = useContext(CartContext);

    const total = items.reduce(
        (acumulador, valorActual) => acumulador + valorActual.quantity,
        0
    )
    return (
        <Link to="/cart" >
        <div className="cartWidget">    
                <img src={carrito} className="cartWidget__img" alt="carrito"/>
            <Notification cantidad={total} />
        </div>
        </Link>
    )
}