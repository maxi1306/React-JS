import React, { useState } from "react";
import { Count } from "./Count";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const ItemDetail = ({data}) => {

  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(data, quantity)
  }

  console.log(data);

  return (

    <section className="list-Container" >
      <div key={data.id} className="containerDetail">
        <div className="card-image">
          <img src={data.image} alt="imageProduct" className="image" />
        </div>
        <h2 className="card-model">{data.model}</h2>
        <ul className="card-info">
          <li className="card-tecno"> {data.tecnologia}</li>
          <li className="card-tecno"> {data.potencia}</li>
          <li className="card-tecno"> {data.velocidad}</li>
          <li className="card-descr"> Dimensiones: {data.dimensiones}</li>
          <li className="card-price"><b>${data.price}</b></li>
        </ul>
        <div className="card-count">

          {
            goToCart
              ? <div className="containerSeguiComprando" > <Link to='/catalogo' className="seguiCompra">Segui Comprando</Link> <Link to='/cart' className="seguiCompra"><i className="bi bi-cart4"></i> Ir al Carrito</Link> </div>
              : <Count initial={1} stock={10} onAdd={onAdd} />
          }
          
        </div>

      </div>
    </section>
  )
};

export default ItemDetail
