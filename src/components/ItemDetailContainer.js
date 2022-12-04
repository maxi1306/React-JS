import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const { detalleId } = useParams();
  

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "products", detalleId);
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [detalleId])

    return (
        <ItemDetail data={data}></ItemDetail>
    )
}

export default ItemDetailContainer
