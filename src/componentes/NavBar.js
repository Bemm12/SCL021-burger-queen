import React from "react";
import { Link } from "react-router-dom";
/* Estilos css */
import "../css/navbar.css";

const NavBar = () => {
  return (
    <>
      {
      
      <nav className="navbar navbar__container">
         
        <Link to="/">
        <img
            className="img-logo2"
            src={require("../img/logo2.png")}
            alt="Imagen hamburguesa Logo"
            
            />
       </Link>
        
</nav>
      
      
      
      
      }
    </>
  );
};

export default NavBar;