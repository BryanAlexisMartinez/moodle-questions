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
                <a href="/listadoPreguntas">Listado preguntas</a>
                </li>

                <li>
                <a href="/formularioEnsayo2">Formulario ensayo</a>
                </li>
            </ul>
        </nav>
        );
    }
}

export default NavBar;