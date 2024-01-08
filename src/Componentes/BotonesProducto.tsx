import React, { useEffect } from 'react';
import './BotonesProducto.css';
import { useNavigate } from 'react-router-dom';

const BotonesProducto: React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // Call API here and consume the content
    }, []);

    return (
        <div className='container'>
            <div className="row botonera-navegacion">
                <div className="col-4 contenedor-boton">

                    <button className="boton-navegacion" onClick={() => navigate('/cajas')}>
                        Cajas
                    </button>

                </div>

                <div className="col-4 contenedor-boton">

                    <button className="boton-navegacion" onClick={() => navigate('/vinos')}>
                        Vinos
                    </button>

                </div>

                <div className="col-4 contenedor-boton">

                    <button className="boton-navegacion" onClick={() => navigate('/snacks')}>
                        Snacks
                    </button>

                </div>

            </div>
        </div>
    );
};

export default BotonesProducto;
