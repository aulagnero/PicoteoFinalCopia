import React, { useState } from "react";
import { Llamada } from "./llamadaCard";
import Card2, { Link } from "./Card2";
import "./cajamisteriosa.css"

interface Producto {
  valoracion: number;
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string[];
}

function CajaMisteriosa() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const ENDPOINT: string = Link + "";

  return (
    <>
      <div className='container '>

        <div className='row'>
          <h2 className="textoo"><span >Productos individuales</span></h2>
        </div>
        <div className="row contenedor-cards">
          <div className="col-2 text-lateral">
            <p className="text-lateral">combina<br />el mejor<br />vino con<br />el picoteo<br />perfecto</p>
          </div>
          <div className="row col-10 target">
            <Llamada endpoint={ENDPOINT} setData={setProductos} />


            {productos.length > 0 ? (
              productos.slice(0, 3).map((prod, index) => <Card2 key={index} producto={prod} />)
            ) : (
              <p>Cargando...</p>
            )}
          </div>
        </div>



      </div>
    </>
  );
}

export default CajaMisteriosa;
