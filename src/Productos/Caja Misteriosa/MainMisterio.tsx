import BannerProductos from "../BannerProductos";
import BarraBotones from "../BarraBotones";
import CajasAnteriores from "../Caja mes/CajasAnteriores";
import BodyMisterio from "./BodyMisterio";





function MainMisterio() {

    return (
        <div>
         <BannerProductos/>
            <BarraBotones/>
           <BodyMisterio/>
           
            <br />
            <CajasAnteriores/>
            <br />
            <br />
        </div>
    )
}
export default MainMisterio;