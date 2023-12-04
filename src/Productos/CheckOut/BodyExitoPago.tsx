import { useSelector } from "react-redux";
import "./BodyCheckOut.css"
import { Link } from "react-router-dom";

function BodyExitoPago() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = useSelector ((state: any) => state.user )

    return (

        <div className="contenedor-body-exito-pago">

            <img src="src/Home/imagenes/pago-exito.svg" alt="pago exitoso" />

            <div className="contenedor-volver-home">
                <div> 
                   <Link to="/home">  <button className="boton-volver">Volver al Home {user.nombreapellido}</button></Link>
                     
                </div>
                
            </div>
        </div>

    )
}

export default BodyExitoPago;