import React, { useState } from "react";
import { Llamada } from "./llamadaCard";
import Card2, { Link } from "./Card2";
import "./cajamisteriosa.css"

interface Producto {
  id: string;
  nombre: string;
  precio: number;
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
          <div className="row">
            <div className="col-2">
            <p className="text-lateral">combina<br />el mejor<br />vino con<br />el picoteo<br />perfecto</p>
            </div>
            <div className="row col-10 target">
              <Llamada endpoint={ENDPOINT} setData={setProductos} />

              {productos.length > 0 ? (
                productos.map((prod, index) => <Card2 key={index} producto={prod} />)
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
