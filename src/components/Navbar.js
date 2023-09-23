import React, { Component } from "react";
import {BrowserRouter as Link } from 'react-router-dom';
import "./styles/navbar.css";

class NavBar extends Component{
    render(){
        return (
            <nav>
            <div class="logo">
                <a href="/">Preguntas</a>
            </div>
            <ul class="nav-links">
                <li>
                <a href="/">Inicio</a>
                </li>
                <li>
                <a href="/formularioEnsayo">Formulario Ensayo</a>
                </li>
            </ul>
        </nav>
        );
    }
}

export default NavBar;