
import BarraBotonesVino from "../CatalogoProductosVINOS/BarraBotonesVino";
import BarraVolver from "./BarraVolver";
import BodyDetallesVino from "./BodyDetallesVino";
import MaridajeVinos from "./MaridajeVinos";
import MigasDePan from "./MigasDePan";
import PerfilSaborVino from "./PerfilSaborVino";
import OpinionesVinos from "./OpinionesVinos";


function MainDetallesVino() {

    return (
        <div>
            <MigasDePan />
            <BarraBotonesVino />
            <BarraVolver />
            <BodyDetallesVino />
            <PerfilSaborVino />
            <MaridajeVinos />
            <OpinionesVinos />
        </div>
    )
}
export default MainDetallesVino;