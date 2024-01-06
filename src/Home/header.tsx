import Barra2 from "./Barramenu";
//import { Banner } from "./Banner";
import "./header.css"
import "./barra.css"
import { Link } from 'react-router-dom';
import LogoPagina from "./Logo-viña-picoteo.svg"
import { useSelector } from 'react-redux';


function Menu() {
    const productos = useSelector((state: any) => state.carroReducers.productos);

    return (
        <>



            <div className="container ">

                <div className="row contenedor-menu">

                    <div className=" col-2 conten1">
                        <Link to="/home"><img className='logovinapicoteo' src={LogoPagina} alt="" /> </Link>


                    </div>
                    <div className="col-8">
                        <Barra2 />
                    </div>


                    <div className="col-1 conten3">
                        <Link to="/login">
                            <img className="carrito" src="src/Home/imagenes/person.svg" alt="" />

                        </Link>
                    </div>
                    <div className="col-1 conten3">
                    <div className="alerta-carrito">
                        {productos.length > 0 && (
                            <div className="alerta">
                                {productos.length}
                            </div>
                        )}
                    </div>

                        <Link to="/carrito"><img src="src/Home/imagenes/shopping-cart.svg" alt="carrito de compras"/></Link>


                        {/* <img className="logousuario" src={imgcarro} alt="" /> */}
                    </div>

                </div>
            </div >
            <div className="contenedorxx">


            </div>

        </>
    )
}
export default Menu;