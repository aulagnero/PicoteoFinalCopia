
import { useSelector } from "react-redux";
import "./BodyCheckOut.css"
import { Link } from "react-router-dom";



function BodyChequearDatos3() {

   
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = useSelector ((state: any) => state.user )

    return (

        <div className="contenedor-body-checkout">

            <div className="contenedor-pago">
                <div className="pago">1. Envío</div>
            </div>

            <div className="contenedor-datos">
                <div className="envio">2. Datos</div>
                <div className="datos-envio">
                    <div className="contenedor-inputs-datos">
                        <div className="label-datos"> Nombre Completo</div>
                        <div className="campo-formulario-datos"> {user.nombreapellido}</div>

                    </div>

                    <div className="campo-select">

                        <div className="contenedor-inputs-datos">
                            <div className="label-datos">RUT</div>
                            <div className="campo-corto-datos">{user.rut}</div>
                        </div>

                        <div className="contenedor-inputs-datos">
                            <div className="label-datos">Teléfono</div>
                            <div className="campo-corto-datos">{user.telefono}</div>
                        </div>

                    </div>

                    <div className="contenedor-inputs-datos">
                        <div className="label-datos"> Dirección de envío</div>
                        <div className="campo-formulario-datos">{user.direccion}</div>
                    </div>


                    <div className="campo-select">
                        <div className="contenedor-inputs-datos">
                            <div className="label-datos">Región</div>
                            <div className="campo-corto-datos">Metropolitana de Santiago</div>
                        </div>
                        <div className="contenedor-inputs-datos">
                            <div className="label-datos">Comuna</div>
                            <div className="campo-corto-datos">La Florida</div>
                        </div>
                    </div>

                    <div className="contenedor-inputs-datos">
                        <div className="label-datos">Referencias</div>
                        <div className="campo-formulario-datos">{user.referencia}</div>
                    </div>

                    <div className="botones-datos">
                        <Link to="/checkout" ><button className="boton-datos">Volver al formulario</button></Link>
                       <Link to="/checkoutPago"> <button className="boton-datos">Ir a pagar</button></Link>

                      
                    </div>
                </div>
            </div>

            <div className="contenedor-pago">
                <div className="pago">3. Pago</div>
            </div>
            {/* <button onClick={handleReset}>Borrar</button> */}
        </div>

    )
}

export default BodyChequearDatos3;