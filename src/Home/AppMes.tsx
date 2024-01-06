import { Llamada } from "./llamadaCard";
import { useState } from "react";
import "./cajamisteriosa.css"
import Card from "../Componentes/CardProduct";


interface Producto {
  valoracion: number;
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string[];
}

function AppMes() {

  const [productos, setProductos] = useState<Array<Producto>>([]);
  const ENDPOINT: string = 'https://f401-200-112-5-153.ngrok-free.app/productos'
  Llamada({endpoint: ENDPOINT, setData: setProductos})


  return (
    <>
      <div className='principal-container'>
        <div className='titulo'><h2>Cajas del Mes </h2></div>
        <div className='card-container'>
          
          
          <div className="row gap-5">
            {productos.length > 0 ? (
              productos.map((prod, index) => <Card key={index} producto={prod} />)
            ) : (
              <><p>Cargando...</p></>
            )}
          </div>

          
        </div>

      </div>
    </>
  )
}

export default AppMes
