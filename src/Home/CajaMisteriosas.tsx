import React, { useState } from "react";
import { Llamada } from "./llamadaCard";
import Card2 from "./Card2";
import "./cajamisteriosa.css"

interface Producto {
  id: string;
  nombre: string;
  precio: number;
}

function CajaMisteriosa() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const ENDPOINT: string = 'https://f401-200-112-5-153.ngrok-free.app/productos';

  return (
    <>
      <div className='container '>
        <div className='row textoo'>
          <h2>Descubre el vino o picoteo ideal para cada ocasión y presupuesto <br />
            con nuestros filtros de búsqueda</h2>
        </div>
          <div className="row">
            <div className="col-2 text">
            <h3>combina el mejor vino con el picoteo perfecto</h3>
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
