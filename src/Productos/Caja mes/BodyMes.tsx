import { Link } from "react-router-dom";
import CardSelect from "../CardSelect";
import "./bodymes2.css"



function BodyMes() {
    return (

        <div className="contenedorPrincipal">
            <div>
                <ul className="Menu">
                    <li><button className="pproductos-clicked">CAJA DEL MES</button></li>
                    <li><button className="pproductos"> <Link to="/cajamisteriosas">Caja Misteriosas</Link></button></li>
                </ul>
            </div>

            <div className="contenidoProducto">
                <div className="contenidoTop"> <CardSelect /></div>
            </div>
        </div>


    )
}

export default BodyMes;