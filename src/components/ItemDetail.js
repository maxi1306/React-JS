import React from "react";
import { Link, useLocation } from "react-router-dom"
import { Count } from "./Count";

const ItemDetail = ({ item }) => {

  const { state } = useLocation();


  return (
    <div className="list-Container" >
      <div key={state.id} className="containerDetail">
        <div className="card-image">
          <img src={state.image} alt="imageProduct" className="image" />
        </div>
        <h2 className="card-model">{state.model}</h2>
        <ul className="card-info">
          <li className="card-tecno"> Tecnologia: {state.tecnologia}</li>
          <li className="card-descr"> Dimensiones: {state.dimensiones}</li>
          <li className="card-price"><b>${state.price}</b></li>
        </ul>
        <div className="card-count">
        <p>Cantidad:</p>
        <Count /></div>
        <Link className="buttomDetail" to={"/catalogo"}>AGREGAR AL CARRITO</Link>
      </div>

    </div>
  )
};

export default ItemDetail
