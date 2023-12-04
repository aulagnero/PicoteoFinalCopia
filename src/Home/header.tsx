import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Barra2 from "./Barramenu";
//import { Banner } from "./Banner";
import "./header.css"
import "./barra.css"

// import imgcarrito from "../Home/imagenes/carritocompra.png"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
//import imgusuario from "./imagenes/usuario.png"
//import logo from "./imagenes/logo-naciones.png"
import { Link } from 'react-router-dom';
import LogoPagina from "./Logo-viña-picoteo.svg"


function Menu() {

    return (

        <header>

            <div className="contenedor">
                <div className="conten1">
                <Link to="/home"><img className='logovinapicoteo'  src={LogoPagina} alt="" /> </Link>
                   

                </div>
                <div className="conten2">
                    <Barra2/>
                </div>
                <div className="conten3">
                
                    <img className="carrito"  src="src/Home/imagenes/Shopicon-user.svg" alt="" />
                </div>
                <div className="conten4">

                <Link to="/login"><button><FontAwesomeIcon icon={faCartShopping}/></button></Link>
                    
                    
                        {/* <img className="logousuario" src={imgcarro} alt="" /> */}
                </div>
            

            </div >
            <div className="contenedorxx">
            
               
               </div>
        </header>

    )
}
export default Menu;