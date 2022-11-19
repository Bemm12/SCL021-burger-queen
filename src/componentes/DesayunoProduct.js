import React from "react";
import { useContext } from "react";
import { Context } from "../context/UseContext";
import menu from "../dataJson/menu.json";
/* Estilos css */
import "../css/productsFood.css";

/* ({}) = desestructuración seria igual que poner props.nombre */

function DesayunoProduct() {
  const { productFood, setProductFood } = useContext(Context);
  const menuDesayuno = menu.desayuno;

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
      {menuDesayuno.map((desayuno) => {
        return (
          <button
            className="row mt-5 productFood__container p-4"
            key={desayuno.id}
            onClick={() => addProductFood(desayuno)}
          >
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={desayuno.image}
                    alt={`Imagen ${desayuno.name}`}
                  />
                </div>
                <div className="col-7">
                  <h3>{desayuno.name}</h3>
                  <p>{desayuno.description}.</p>
                </div>
                <div className="col-2">
                  <p className="fw-bold">
                    ${desayuno.price.toLocaleString("es-CL")}
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

export default DesayunoProduct;
