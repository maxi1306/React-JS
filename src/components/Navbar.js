import React from "react";
import CardWidget from "./CardWidget";

const Navbar = ({logo,  inicio, catalogo, contacto, carrito}) => {
    return (
        
            <nav className="nav">
                <img src={logo} alt="logo" href="#" className="logoRE"/>
                <ul className='etiNav'>
                    
                    <li><a to="/" className="lnav">{inicio}</a></li>
                    <li><a to="/catalogo" className="lnav">{catalogo}</a></li>
                    <li><a href="#" className="lnav">{contacto}</a></li>
                    <li><a href="#" className="iconCardWidget">
                        <CardWidget/>
                        </a></li>

                </ul>
            </nav>

    ) ;}

    export default Navbar

