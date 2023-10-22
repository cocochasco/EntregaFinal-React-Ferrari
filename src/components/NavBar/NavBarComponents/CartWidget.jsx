import carrito from "../../../images/carrito.svg"
import { Notification } from "./Notification"

export const CartWidget = () => {
    return (
        <div className="cartWidget">
            <a href="# ">
                <img src={carrito} className="cartWidget__img"/>
            </a>
            <Notification cantidad={1} />
        </div>
    
    )
}