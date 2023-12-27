

import AppRegala from "../Componentes/AppRegala";
import { Banner } from "./Banner";

import CajaMisterio from "./CajaMisteriosas";
import BotonesCajas from "../Componentes/BotonesCajas";
// import Footernaciones from "./Footer";
// import Menu from "./header";


function MainHome() {

    return (
        <div>
            {/* <Menu /> */}
            <Banner/>

            <BotonesCajas />

            <CajaMisterio/>

            <AppRegala/>

            {/* <Footernaciones /> */}
        </div>
    )
}
export default MainHome;