import React from "react";
import { useCartContext } from "../context/CartContext";



const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <section>
        <div key={product.id} className="cartContainer">
            <div className="cart-lister">
                <img className="cartImage" src={product.image} alt={product.model} />
                <div className="cartDesc">
                    <p className="cartModel">Modelo: {product.model}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p className="cartPrice">Precio: ${product.price}</p>
                    <p>SubTotal: ${product.quantity * product.price}</p>
                    <button className="buttonEliminar" onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    </section>
    );
}

export default ItemCart