import { Link, Outlet } from "react-router-dom";
import "./barra.css"



function Barra2 ()  {

    return ( 

<div className="botones">
    <div >
        <button className="productoss">
        
        <Link to="/productos">Productos</Link>
            
            
        </button>
    </div>
    <div>
        <button className="productoss">
        Club del Vino
        </button>
    </div>
    <div>
        <button className="productoss">
        <Link to="/suscripciones">Suscripciones</Link>
        </button>
    </div>
        <Outlet/>
</div>
    )
}
export default Barra2 