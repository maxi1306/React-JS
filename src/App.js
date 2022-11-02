import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer.js';
import logo from './img/logo.png';



function App() {
  return (
    <div >
      <Navbar
        logo={logo}
        inicio='INICIO'
        catalogo='CATALOGO'
        contacto='CONTACTO'
      ></Navbar>
      <ItemListContainer/>
    </div>
  );
}

export default App;
