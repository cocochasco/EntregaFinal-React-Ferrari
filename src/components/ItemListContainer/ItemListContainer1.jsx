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
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        
        const refCollection = !id 
        ? collection(db, "items")
        : query(collection(db, "items"), where("categoryId", "==", id ))

        function promise() {new Promise (resolve => 
            setTimeout(() => resolve(getDocs(refCollection).then((snapshot) => {
                if (snapshot.exists) return <h1>No results</h1>
                else 
                setItem(
                    snapshot.docs.map((doc) => {
                        return { id:doc.id, ...doc.data()}
                    })
                )
            }).finally(() => setLoading(false))
            ), 2000)
        )}
        promise()
    }, [id])
   
    return (
        <main>
            <ItemList  item={item} loading={loading}/> 
        </main>
    )
}