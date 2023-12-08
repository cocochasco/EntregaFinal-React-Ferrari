import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { getFirestore, doc, getDoc } from "firebase/firestore"

import { ItemDetail} from "./ItemDetail"

export const ItemDetailContainer = () => {
    const [itemId, setItemId] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        const database = getFirestore();

        const refDoc = doc(database, "items", id) 

        getDoc(refDoc).then((snapshot) => {
            setItemId({id: snapshot.id, ...snapshot.data()})
        })
    }, [id])
   
  /*   useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        promise.then( () => {
            const findItemById = products.find( (item) => item.id === Number(id) );
            setItemId(findItemById)
        })
    }, [id]) */
    
    return (
        itemId ? 
            <ItemDetail  item={itemId} /> 
        : 
            <Container className="d-flex flex-wrap mt-3 justify-content-center ">
                <div>Loading...</div>
            </Container>
        )
}
