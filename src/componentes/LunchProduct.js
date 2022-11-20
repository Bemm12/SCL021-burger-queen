import React from "react";
import { useContext } from "react";
import { Context } from "../context/UseContext";
import menu from "../dataJson/menu.json";
/* Estilos css */
import "../css/productsFood.css";

/* ({}) = desestructuración seria igual que poner props.nombre */
function LunchProduct() {
  const { productFood, setProductFood } = useContext(Context);

  const menuLunch = menu.lunch;

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
      {menuLunch.map((lunch) => {
        return (
          <button
            className="row mt-5 productFood__container p-4"
            key={lunch.id}
            onClick={() => addProductFood(lunch)}
          >
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={lunch.image}
                    alt={`Imagen ${lunch.name}`}
                  />{" "}
                </div>
                <div className="col-7">
                  <h3>{lunch.name}</h3>
                  <p>{lunch.description}.</p>
                </div>
                <div className="col-2">
                  <p className="fw-bold">
                    ${lunch.price.toLocaleString("es-CL")}
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

export default LunchProduct;
