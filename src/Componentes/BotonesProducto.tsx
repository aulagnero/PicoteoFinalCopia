import React, { useEffect } from 'react';
import './BotonesProducto.css';
import { Link } from 'react-router-dom';

const BotonesProducto: React.FC = () => {
    useEffect(() => {
        // Call API here and consume the content
    }, []);

    return (
        <div className='container'>
            <div className="row botonera-navegacion">
                <div className="col-4 contenedor-boton">
                <Link to="/cajas">
                <button className="boton-navegacion" >Cajas</button>
                </Link>
                </div>

                 <div className="col-4 contenedor-boton">
                 <Link to="/vinos">
                  <button className="boton-navegacion">  Vinos </button>
                  </Link>
                </div>
                
                <div className="col-4 contenedor-boton">
                <Link to="/snacks">
                <button className="boton-navegacion" >Snacks</button>
                </Link>
                </div>
            
            </div>
        </div>
    );
};

export default BotonesProducto;
