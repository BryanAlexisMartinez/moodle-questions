import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./styles/navbar.css";

class NavBar extends Component{
    render(){
        return (
            <nav>
            <div class="logo">
                <a href="/">Preguntas tipo moodle</a>
            </div>
            <ul class="nav-links">
                <li>
                <Link to="/" class="nav-link active">Inicio</Link>
                </li>
                <li>
                <Link to="/formularioEnsayo" class="nav-link active">Formulario ensayo</Link>
                </li>
                <li>
                <Link to="#" class="nav-link active">a</Link>
                </li>
                <li>
                <Link to="#" class="nav-link active">a</Link>
                </li>
            </ul>
        </nav>
        );
    }
}

export default NavBar;