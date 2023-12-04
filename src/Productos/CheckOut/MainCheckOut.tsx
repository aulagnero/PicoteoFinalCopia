import BarraBotonesCheckOut from "./BarraBotonesCheckOut";
import MigasDePanCheckOut from "./MigasDePanCheckOut";
// import BodyCheckOut from "./BodyCheckOut";
import Bodycheckout2 from "./Bodycheckout2";
// import BodyPago from "./BodyPago";
// import BodyExitoPago from "./BodyExitoPago";
// import BodyChequearDatos from "./BodyChequearDatos";


function MainCheckOut() {

    return (
        <div>
            <MigasDePanCheckOut />
            <BarraBotonesCheckOut />
            <Bodycheckout2 />
            <br />
            {/* <MigasDePanCheckOut />
            <BarraBotonesCheckOut />
            <BodyChequearDatos />
            <br />
            <MigasDePanCheckOut />
            <BarraBotonesCheckOut />
            <BodyPago />
            <br />
            <MigasDePanCheckOut />
            <BodyExitoPago /> */}

        </div>
    )
}
export default MainCheckOut;