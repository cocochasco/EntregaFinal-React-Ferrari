import { useState } from "react"
import { Button } from "react-bootstrap"

export const ItemCount = ({initial, onAdd, stock }) => {
    const [stateCount, setStateCount] = useState(initial)

    const increase = () => {
        if(stateCount < stock)
        setStateCount(stateCount + 1)
        else alert("No tenemos suficiente stock")
    }

    const decrease = () => {
        if (stateCount > initial)
        setStateCount(stateCount - 1)
    }

    const add = () => {
        onAdd(stateCount)
        setStateCount(initial)
    }
    
    return (
         <>
            <div style={{display: "flex",alignItems: "center"}}>
                <Button variant="success" onClick={decrease} style={{margin: "1rem"}}>-</Button>
                <h3>{stateCount}</h3>
                <Button variant="success" onClick={increase} style={{margin: "1rem"}}>+</Button>
                <Button variant="success" onClick={add} style={{margin: "1rem"}}>Agregar al carrito</Button>
            </div>
         </>    
    )
}
