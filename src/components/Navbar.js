import React from "react";
import CardWidget from "./CardWidget";
import { NavLink } from "react-router-dom";

const Navbar = ({logo,  inicio, catalogo}) => {
    return (
        
            <nav className="nav">
                <img src={logo} alt="logo" href="/" className="logoRE"/>
                <ul className='etiNav'>
                    
                    <li><NavLink to="/" className="lnav">{inicio}</NavLink></li>
                    <li><NavLink to="/catalogo" className="lnav">{catalogo}</NavLink></li>
                    <li><NavLink to="/cart" className="iconCardWidget">
                        <CardWidget/>
                        </NavLink></li>

                </ul>
            </nav>

    ) ;}

    export default Navbar

