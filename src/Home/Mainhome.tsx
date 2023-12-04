

import AppRegala from "./AppRegala";
import { Banner } from "./Banner";

import CajaMisterio from "./CajaMisteriosas";
// import Footernaciones from "./Footer";
// import Menu from "./header";


function MainHome() {

    return (
        <div>
            {/* <Menu /> */}
            <Banner/>
            <br />
            <br />
            <CajaMisterio/>
            
            <br />
            <br />
            <AppRegala/>
            <br />
            <br />
            {/* <Footernaciones /> */}
        </div>
    )
}
export default MainHome;