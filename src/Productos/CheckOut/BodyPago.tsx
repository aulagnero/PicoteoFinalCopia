import { Link } from "react-router-dom"
import "./BodyCheckOut.css"

function BodyPago() {

    return (

        <div className="contenedor-body-medios-pago">

            <div className="contenedor-pago">
                <div className="pago">1. Envío</div>
            </div>

            <div className="contenedor-pago">
                <div className="pago">2. Datos</div>
            </div>

            <div className="contenedor-seleccione-pago">
                <div className="pago">3. Pago</div>
                <div className="seleccione-pago">Seleccione el medio de pago</div>
                <div className="contenedorBotoness">
                <div><button className="medios-pago">Tarjetas de crédito</button></div>
                <div>
                    <Link to="/checkoutPagoExito"><button className="medios-pago-clicked">Webpay</button></Link></div>
                <div><button className="medios-pago">Mercadopago</button></div>

               
            </div>
            </div>

            



        </div>

    )
}

export default BodyPago