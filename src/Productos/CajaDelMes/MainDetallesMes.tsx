import BodyDetallesMes from "./BodyDetallesMes";
import MigasDePanMes from "./MigasDePanMes";
import OpinionesVinos from "../Producto Detalles Vino/OpinionesVinos";
import BarraBotonesMes from "./BarraBotonesMes";
import BarraBotonesCajas from "./BarraBotonesCajas";

function MainDetallesMes() {

    return (
        <div>
            <MigasDePanMes />
            <BarraBotonesMes />
            <BarraBotonesCajas />
            <BodyDetallesMes />
            <OpinionesVinos />
        </div>
    )
}
export default MainDetallesMes;