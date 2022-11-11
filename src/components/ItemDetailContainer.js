import React from "react"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const [productDetail, setProduct] = useState([])

    useEffect(() => {
        fetch("https://636593c5046eddf1baf001f8.mockapi.io/productos")
          .then((res) => res.json())
          .then(json => setProduct(json))
          .catch((err) => console.log(err));
      }, []);
    
    
    return(
        <ItemDetail item={productDetail}></ItemDetail>
    )
}

export default ItemDetailContainer
