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
                <button className="boton-navegacion" ><Link to="/cajas">Cajas</Link></button>
                </div>

                 <div className="col-4 contenedor-boton">
                  <button className="boton-navegacion"> <Link to="/vinos"> Vinos </Link></button>
                </div>
                
                <div className="col-4 contenedor-boton">
                <button className="boton-navegacion" >Snacks</button>
                </div>
            
            </div>
        </div>
    );
};

export default BotonesProducto;
