import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

// Info de los items a cargar
const items = [
  {
    id: 1,
    imagen: "./Images/350z.jpg",
    titulo: "Nissan 350Z",
    precio: 1,
  },
  {
    id: 2,
    imagen: "./Images/Geneses.jpg",
    titulo: "Hyundai Genesis",
    precio: 1,
  },
  {
    id: 3,
    imagen: "./Images/HondaCrx.jpg",
    titulo: "Honda Crx",
    precio: 1,
  },
  {
    id: 4,
    imagen: "./Images/HondaPrelude.jpg",
    titulo: "Honda Prelude",
    precio: 1,
  },
  {
    id: 5,
    imagen: "./Images/mazdamx3.jpg",
    titulo: "Mazda Mx3",
    precio: 1,
  },
  {
    id: 6,
    imagen: "./Images/Veloster.jpg",
    titulo: "Hyundai Veloster",
    precio: 1,
  },
];

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  // El delay de la carga
  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 3000);
    });

    obtenerProductos.then((resp) => setProductos(resp));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ItemList productos={productos} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">{props.texto}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ItemCount stock="5" initial={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;