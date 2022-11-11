import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import logo from './img/logo.png';
import { Route, Routes } from 'react-router-dom';
import { Home, Catalogo, ItemDetalles } from './pages/index';
import Footer from './components/footer';



const App = () => {
  return (

    <div>

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
          <Route exact path="/itemDetalles/:productId" element={<ItemDetalles />} />
        </Routes>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App;
