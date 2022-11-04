import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import logo from './img/logo.png';
import { Route, Routes } from 'react-router-dom';
import { Home, Catalogo} from './pages/index';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  return (
    
      <div>
        
        <Navbar
          logo={logo}
          inicio='INICIO'
          catalogo='CATALOGO'
          contacto='CONTACTO'
        ></Navbar>
        <main>
        <ItemDetailContainer/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalogo" element={<Catalogo />} />
        </Routes>
        </main>
      </div>
    
  );
}

export default App;
