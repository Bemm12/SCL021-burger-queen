import React from 'react';
import '../css/inicio.css';
import { Link } from 'react-router-dom';
import Footer from '../componentes/Footer';

import "../App.css";

const PaginaInicio = () => {
  return (
    <div className=" container--color d-flex flex-column ">
      <main className="container-fluid vh-100 d-flex flex-column  justify-content-evenly">
        <div className="d-flex justify-content-center">
        <img
            className="img-logo"
            src={require("../img/logo.png")}
            alt="Imagen hamburguesa Logo"
            />
             </div>
        <div className="buttonCover ">
          <Link className="button-inicio" to="/Menu">
            Mesero
          </Link>
          <Link className="button-inicio" to="/Cocina">
            Chef
          </Link>
        </div>
      </main>
      <Footer /> 
    </div>
  )
}
export default PaginaInicio;
