import React, { useEffect } from 'react';
import './BotonesCajas.css';

const BotonesCajas: React.FC = () => {
    useEffect(() => {
        // Call API here and consume the content
    }, []);

    return (
        <div className='container'>

            <div className='row'>
                <h2 className="textoo"><span >Cajas</span></h2>
            </div>


            <div className="row botonera-seleccion">
                <div className="col-6 contenedor-botones">
                    <button className="boton-seleccion" onClick={() => console.log('Cajas')}>Del mes</button>
                </div>

                <div className="col-6 contenedor-botones">
                    <button className="boton-seleccion" onClick={() => console.log('Vinos')}>Misteriosa</button>
                </div>

            </div>
        </div>
    );
};

export default BotonesCajas;
