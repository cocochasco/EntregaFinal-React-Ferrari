import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { 
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    where, 
    } from "firebase/firestore"

import "../../App.css"
import { ItemList } from './ItemList'




export const ItemListContainer1 = () => {
    const [item, setItem] = useState([]) 
    const [loading, setLoading] = useState(false)

    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id //poner en un hook!
        ? collection(db, "items")
        : query(collection(db, "items"), where("categoryId", "==", id ))

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.exists) return <h1>No results</h1>
            else 
            setItem(
                snapshot.docs.map((doc) => {
                    return { id:doc.id, ...doc.data()}
                })
            )
        })
    }, [id])//Combinar con el de abajo
    
    /* useEffect (() => {
        const promise = new Promise (resolve => 
                setTimeout(() => resolve(products), 2000)
            )
            promise 
                .then(products => {
                    if(!id) {
                        setItem(products)
                    }else {
                        const productsByCategory = products.filter(
                            item => item.category === id
                        )
                        setItem(productsByCategory)
                    }
                })
                .finally(() => setLoading(false))
    },[id]) */

    return (
        <main>
            <ItemList  item={item} loading={loading}/>
        </main>
    )
}