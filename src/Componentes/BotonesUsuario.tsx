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
                <Link to="/invitado">
                <button className="boton-navegacion" >Invitado</button>
                </Link>
                </div>

                 <div className="col-4 contenedor-boton">
                 <Link to="/usuario">
                  <button className="boton-navegacion"> Iniciar sesión </button>
                  </Link>
                </div>
                
                <div className="col-4 contenedor-boton">
                <Link to="/registro">
                <button className="boton-navegacion" >Registrarse</button>
                </Link>
                </div>
            
            </div>
        </div>
    );
};

export default BotonesProducto;
