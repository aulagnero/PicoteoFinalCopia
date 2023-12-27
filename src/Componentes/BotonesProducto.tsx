import React, { useEffect } from 'react';
import './BotonesProducto.css';

const BotonesProducto: React.FC = () => {
    useEffect(() => {
        // Call API here and consume the content
    }, []);

    return (
        <div className='container'>
            <div className="row botonera-navegacion">
                <div className="col-4 contenedor-boton">
                <button className="boton-navegacion" onClick={() => console.log('Cajas')}>Cajas</button>
                </div>

                <div className="col-4 contenedor-boton">
                <button className="boton-navegacion" onClick={() => console.log('Vinos')}>Vinos</button>
                </div>

                <div className="col-4 contenedor-boton">
                <button className="boton-navegacion" onClick={() => console.log('Snacks')}>Snacks</button>
                </div>
            
            </div>
        </div>
    );
};

export default BotonesProducto;
