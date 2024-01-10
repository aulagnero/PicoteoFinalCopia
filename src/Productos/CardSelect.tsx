// import { useState } from 'react'
import '/src/Productos/CardSelect.css'
import { Link } from 'react-router-dom';


function CardSelect() {
    // const [countLikes] = useState(0)
    // const mostrarAlerta = () => {
    //     alert(`Agregaste ${countLikes} productos al carro de compras.`);
    // }; //esto de las comillas invertidas lo encontré en internet, no lo sabía, pero me permitió usar $ para que {props.nombreUsuario} no se leyera como string. Cool.

    return (
        <>
            <div className="containerSelect">

                <div className='fotoProductoSelect'>
                    <img height="208px" width="96%" src='src/assets/foto-producto.png' alt="foto producto" />
                </div>

                <div className='tituloPrecio'>
                    <div className='titulo'><h3>Lorem Ipsum</h3></div>
                    <div className='precio'>$ 39.999</div>
                </div>

                <div className='textoPublicacion'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className='botonera'>
                    <div >
                    
                       <Link to="/suscripciones"> <button className='botonCierre' ><img width="60%" src="src/assets/carritocompra.png" alt="agregar al carro" /></button></Link>
                    </div>
                </div>

            </div>


        </>
    )
}

export default CardSelect;
