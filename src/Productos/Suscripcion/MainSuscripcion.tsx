import BannerProductos from "../BannerProductos";
import BarraBotones from "../BarraBotones";
import CajasAnteriores from "../Caja mes/CajasAnteriores";
import BodySuscripcion from "./BodySuscripcion";

import DetallesProductos from "./DetallesProducto";
import "../Caja mes/bodymes2.css"

function MainSuscripcion() {

    return (
        <div>
         <BannerProductos/>
            <BarraBotones/>
            <BodySuscripcion/>
           
           <br />
           <br />
           <br />
           <br />
           
           <br />
           <br />
           <DetallesProductos/>
            <br />
            <CajasAnteriores/>
            <br />
            <br />
            <br />
           
           <br />
           <br />
        </div>
    )
}
export default MainSuscripcion;