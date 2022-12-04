import React from "react";
import './style.css';
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { createBuyOrder } from "../../firebase/config";
import Swal from "sweetalert2";
import CheckoutForm from "../CheckoutForm/CheckoutForm";


const Cart = () => {
    const { cart, totalPrice, clearCart, emptyCart } = useCartContext();
    const navigate = useNavigate();
    

    if (cart.length === 0) {
        return (
            <> <div className="noProductsContainer">
                <p className="noProducts">No hay Productos en el Carrito</p>
                <Link className="hacerCompra" to='/catalogo'>Hacer Compra</Link>
                </div>
            </>
        );
    }

    function handleCheckout() {   

        const orderData = {
          buyer: {
            name: "",
            phone: "",
            email: "",
          },
          item: cart,
          total: totalPrice(),
        };
    

        createBuyOrder(orderData).then((respuesta) => {
          Swal.fire({
            icon: "success",
            title: `Gracias por su compra`,
            text: `Su codigo de pedido es: ${respuesta}. Vía mail le enviaremos toda la info.`,
            imageUrl: 'http://localhost:3000/static/media/logo.d970a1a7.png',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
        });
        emptyCart();
        navigate("/");
      }

    return (
        <div className="carritoContainer">
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            
            <section className="cartCheckout">
                <h3 className="cartTotal">
                    Total: ${totalPrice()}
                </h3>
                <p>Complete los campos para Finalizar su Compra.</p>
                <CheckoutForm></CheckoutForm>
                <button className="buttomCart" onClick={handleCheckout} >Finalizar compra</button>
                <button className="buttomCart" onClick={clearCart} >Vaciar carrito</button>
                <Link className="buttomCart" to='/catalogo'>Seguir Comprando</Link>
            </section>

        </div>

    )

}

export default Cart;
