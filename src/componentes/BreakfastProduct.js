import React from "react";
import { useContext } from "react";
import { Context } from "../context/UseContext";
import menu from "../dataJson/menu.json";
/* Estilos css */
import "../css/productsFood.css";

/* ({}) = desestructuración seria igual que poner props.nombre */

function BreakfastProduct() {
  const { productFood, setProductFood } = useContext(Context);
  const menuBreakfast = menu.breakfast;

  const addProductFood = (product) => {
    const productsExist = productFood.find((item) => item.id === product.id);
    if (productsExist) {
      setProductFood(
        productFood.map((item) =>
          item.id === product.id
            ? { ...productsExist, count: productsExist.count + 1 }
            : item
        )
      );
    } else {
      setProductFood([...productFood, { ...product, count: 1 }]);
    }
  };
  return (
    <>
      {menuBreakfast.map((breakfast) => {
        return (
          <button
            className="row mt-5 productFood__container p-4"
            key={breakfast.id}
            onClick={() => addProductFood(breakfast)}
          >
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={breakfast.image}
                    alt={`Imagen ${breakfast.name}`}
                  />
                </div>
                <div className="col-7">
                  <h3>{breakfast.name}</h3>
                  <p>{breakfast.description}.</p>
                </div>
                <div className="col-2">
                  <p className="fw-bold">
                    ${breakfast.price.toLocaleString("es-CL")}
                  </p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </>
  );
}

export default BreakfastProduct;
