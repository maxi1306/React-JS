import React, { useState } from "react";
import "./CheckoutForm";
import {getFirestore, collection, addDoc} from "firebase/firestore"
import { useCartContext } from "../../context/CartContext";


function CheckoutForm() {
const {cart, totalPrice} = useCartContext()

  const valorInicial = {
    buyer: {
      nombre: "",
      telefono: "",
      email: ""
    },
    items: cart.map(product => ({id: product.id, nombre: product.nombre, precio: product.precio, quantity: product.quantity})),
    total: totalPrice(),
  }



const [user, setUser] = useState(valorInicial)

const capturarInputs = (e) =>{
  const {name, value} = e.target;
  setUser({...user, [name]:value})
}

const guardarDatos = (e) => {
  e.preventDefault();

  try {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection,{...user})

  } catch (error) {
    console.log(error);
  }
 setUser({...valorInicial})
 console.log(valorInicial);

}


  return (
    <form required onSubmit={guardarDatos} >
      <div className="checkout-container">
        <input
          onChange={capturarInputs}
          name="nombre"
          type="nombre"
          value={user.nombre}
          placeholder="Nombre"
        />
        <input
          onChange={capturarInputs}
          name="telefono"
          type="telefono"
          value={user.telefono}
          placeholder="Telefono"
        />
        <input
          onChange={capturarInputs}
          name="email"
          type="email"
          value={user.email}
          placeholder="Email"
        />
      </div>
    </form>
  );
}


export default CheckoutForm  ;

