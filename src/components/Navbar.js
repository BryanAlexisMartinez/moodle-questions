import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./styles/navbar.css";

class NavBar extends Component{
    render(){
        return (
            <nav>
            <div className="logo">
                <a href="#">Preguntas</a>
            </div>
            <ul className="nav-links">
                <li>
                <Link to="/" className="nav-link active">Inicio</Link>
                </li>
                <li>
                <Link to="/formularioEnsayo" className="nav-link active">Formulario ensayo</Link>
                </li>
                <li>
                <Link to="#" className="nav-link active">a</Link>
                </li>
                <li>
                <Link to="#" className="nav-link active">a</Link>
                </li>
            </ul>
        </nav>
        );
    }
}

export default NavBar;