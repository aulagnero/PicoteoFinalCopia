
import CardSuscripcion from "./CardSuscripcion";
import "../Caja mes/bodymes2.css"

function BodySuscripcion() {
    return (

        <div className="contenedorPrincipal">
            <div>
                <ul className="Menu">
                    <li><button className="pproductos">CAJA DEL MES</button></li>
                    <li><button className="pproductos-clicked">CAJAS MISTERIOSAS</button></li>
                </ul>
            </div>

            <div className="contenidoProducto">
                <div className="contenidoTop"> <CardSuscripcion /></div>
            </div>
        </div>


    )
}

export default BodySuscripcion;