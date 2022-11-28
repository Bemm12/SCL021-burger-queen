import React from "react";
import { useContext } from "react";
import { Context } from "../context/UseContext";
/* import { error, errorProducts, correct } from "../../function/errorManagement"; */
/* import { db } from "../../firebase/configfirebase";
import { collection, addDoc } from "firebase/firestore"; */
import CommentsOrder from "./CommentsOrder";
import OrdersPlaced from "./OrdersPlaced";
import BtnSendToKitchen from "./BtnSendToKitchen";

/* Estilos css */
import "../css/menuOrder.css";
const MenuOrder = () => {
  const {
    clientName,
    setClientName,
    table,
    setTable,
    productFood,
    setProductFood,
    comment,
    setComment,
    stateProductKitchen,
  } = useContext(Context);

  // Suma total productos
  const totalProducts = productFood.reduce(
    (total, product) => (total = total + product.price * product.count),
    0
  );
  const total = totalProducts.toLocaleString("es-CL");

  // Hora de ingreso pedido:
  const checkInTime = () => {
    let currentTime = new Date();
    return `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  };
  

  return (
    <>
      <form >
      
        <article className="container menuOrder__container mt-5">
          <div className="d-flex menuOrder__clientName pt-5">
            <h3>Cliente:</h3>
            <input
              className="menuOrder__formClient"
              type="text"
              placeholder="Nombre cliente"
              value={clientName}
              readOnly="readonly"
            />
          </div>
          <div className="d-flex menuOrder__clientTable">
            <h3>Mesa:</h3>
            <input
              className="menuOrder__formClient"
              type="text"
              value={table}
              readOnly="readonly"
            />
          </div>
          <hr className="borderHr mt-3" />
          {/* Los pedidos iterables */}
          <OrdersPlaced />
          {/* Total */}
          <div className="d-flex justify-content-center">
            <p className="menuOrder__total pt-5">Total: $ {total}</p>
          </div>
          <CommentsOrder />
        </article>
        <BtnSendToKitchen />
      </form>
    </>
  );
};

export default MenuOrder;
