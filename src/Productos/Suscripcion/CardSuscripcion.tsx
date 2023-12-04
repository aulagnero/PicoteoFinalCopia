import { useState } from 'react'
import "/src/Productos/Suscripcion/CardSuscripcion.css"


function CardSuscripcion() {
    const [countLikes, setCountLikes] = useState(0)
    const mostrarAlerta = () => {
        alert(`Agregaste ${countLikes} productos al carro de compras.`);
    }; //esto de las comillas invertidas lo encontré en internet, no lo sabía, pero me permitió usar $ para que {props.nombreUsuario} no se leyera como string. Cool.

    return (
        <>
            <div className="containerSuscripcion">

                <div className='fotoProductoSuscripcion'>
                    <img height="208px" src='src/assets/foto-producto.png' alt="foto producto" />
                </div>

                <fieldset className='opcionesCompra'>

                    <label className='tituloSuscr'>SUSCRIPCIÓN</label>
                    <select className="suscripciones">
                        <option className="planes" value="trimestral">Plan trimestral | Entrega mensual</option>
                        <option value="semestral">Plan semestral | Entrega mensual</option>
                        <option value="anual">Plan anual | Entrega mensual</option>
                    </select>

                    <div className='botonerasuscripcion'>
                        <div className='botones8'>
                            <div className='precio'>$ 39.999</div>

                            <div className='botones8'>
                                <div>
                                    <button className='botonCierre' onClick={() => setCountLikes((countLikes) => countLikes - 1)}>
                                        <div>-</div>
                                    </button>
                                </div>
                                <div>  {countLikes}  </div>
                                <div>
                                    <button className='botonCierre' onClick={() => setCountLikes((countLikes) => countLikes + 1)}>
                                        <div>+</div>
                                    </button>
                                </div>
                            </div>

                            <div ><button className='botonCierre' onClick={mostrarAlerta}><img width="60%" src="src/assets/carritocompra.png" alt="agregar al carro" /></button></div>
                        </div>
                    </div>

                </fieldset>

                <div className='datosProducto'>
                    <div className='tituloPreciosuscr'>
                        <div className='tituloSuscr'>CAJA PREMIUM </div>
                    </div>

                    <div className='textoPublicacionSuscr'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <fieldset className='opcionesCompra'>

                    <label className='tituloSuscr'>COMPRA UNITARIA</label>

                    <div className='botonerasuscripcion'>
                        <div className='botones8'>
                            <div className='precio'>$ 39.999</div>

                            <div className='botones8'>
                                <div>
                                    <button className='botonCierre' onClick={() => setCountLikes((countLikes) => countLikes - 1)}>
                                        <div>-</div>
                                    </button>
                                </div>
                                <div>  {countLikes}  </div>
                                <div>
                                    <button className='botonCierre' onClick={() => setCountLikes((countLikes) => countLikes + 1)}>
                                        <div>+</div>
                                    </button>
                                </div>
                            </div>

                            <div ><button className='botonCierre' onClick={mostrarAlerta}><img width="60%" src="src/assets/carritocompra.png" alt="agregar al carro" /></button></div>
                        </div>
                    </div>

                </fieldset>

            </div>

        </>
    )
}

export default CardSuscripcion;
