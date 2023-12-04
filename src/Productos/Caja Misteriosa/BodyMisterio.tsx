

import Card from "../../Home/Card"
import "./BodyMisterio.css"

function BodyMisterio() {
    return (

        <div className="contenedorPrincipal">
            <div>
                <ul className="Menu">
                    <li><button className="pproductos">CAJA DEL MES</button></li>
                    <li><button className="pproductos-clicked">CAJAS MISTERIOSAS</button></li>
                </ul>
            </div>

            <div className="contenidoProducto">
                <div className="contenidoTop"> 
                <div className="divcaja">
                <Card />
                <Card />
                <Card />
                </div>
                <br />
                <br />
                <div className="divcaja">
                <Card />
                <Card />
                <Card />
                </div>
                </div>
            </div>
        </div>


    )
}

export default BodyMisterio;