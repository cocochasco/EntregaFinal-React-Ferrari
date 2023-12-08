import { useState } from "react"

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
    
    
    return (//Convertr el h3 en input pero que a la vez muestre el stateCount
         <>
            <div style={{display: "flex"}}>
                <button onClick={decrease}>-</button>
                <h3>{stateCount}</h3>
                <button onClick={increase}>+</button>
                <button onClick={add}>Agregar al carrito</button>
                </div>
         </>
     
    )
}



