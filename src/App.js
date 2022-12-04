import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import logo from './img/logo.png';
import { Route, Routes } from 'react-router-dom';
import { Home, Catalogo, ItemDetalles} from './pages/index';
import Footer from './components/footer';
import ItemListContainer from './components/ItemListContainer';
import CartProvider from './context/CartContext';
import Cart from './components/cart/index'



const App = () => {
  return (

    <div>
      <CartProvider>
        <Navbar
          logo={logo}
          inicio='INICIO'
          catalogo='CATALOGO'
          contacto='CONTACTO'
        ></Navbar>
        <main className='mainContainer'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/catalogo" element={<Catalogo />} />
            <Route exact path="/catagory/:categoryId" element={<ItemListContainer />} />
            <Route exact path="/itemDetalles/:detalleId" element={<ItemDetalles />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </CartProvider>
    </div >

  );
}

export default App;
