import BannerProductos from "../BannerProductos";
import BarraBotones from "../BarraBotones";
import BodyMes from "./BodyMes";
import CajasAnteriores from "./CajasAnteriores";




function MainCajaMEs() {

    return (
        <div>
         <BannerProductos/>
            <BarraBotones/>
            <BodyMes/>
            <br />
            <CajasAnteriores/>
            <br />
            <br />
        </div>
    )
}
export default MainCajaMEs;