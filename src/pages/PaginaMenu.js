import React from "react";
import MenuProducts from '../componentes/MenuProducts';
/* import MenuOrder from '../componentes/MenuOrder'; */
import NavBar from '../componentes/NavBar'; 
import Footer from '../componentes/Footer';

/* Estilos css */
import "../css/page-menu.css";
import "../App.css";

const PaginaMenu = () => {
  return (
    <div className="container--color">
      <NavBar />
      <main className="container-fluid pageMenu d-flex flex-column align-items-center">
        <section className="container-fluid row">
          {/* Menú con los productos*/}
          <article className="col-12 col-md-6 container-tabmenu">
            <MenuProducts />
          </article>
          {/* Pedido total */}
          <article className="col-12 col-md-6 d-flex flex-column pageMenu__menuOrder">
            <h2 className="text-center pageMenu__resumenText">Detalle del pedido</h2>
            {/* Menu con el resumen de productos */}
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PaginaMenu;

