import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import "../../App.css"
import { ItemList } from './ItemList'

import products from "../../data/products-onesta.json"


export const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const {id}= useParams()
    
    useEffect (() => {
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
    },[id])

    return (
        <main>
            <ItemList  item={item} loading={loading}/>
        </main>
    )
}