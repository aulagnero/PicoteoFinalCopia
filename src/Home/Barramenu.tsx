import { Link, Outlet } from "react-router-dom";
import "./barra.css"



function Barra2() {

    return (

        <div>
            <div className="row">
                <div className="col-3">
                    <button className="productoss">

                        <Link to="/productos">Cajas</Link>


                    </button>
                </div>
                <div className="col-3">
                    <button className="productoss">
                        Vinos
                    </button>
                </div>
                <div className="col-3">
                    <button className="productoss">
                        <Link to="/suscripciones">Snacks</Link>
                    </button>
                </div>
                <div className="col-3">
                    <button className="productoss">
                        Preguntas frecuentes
                    </button>
                    <Outlet />
                </div>
            </div>
        </div>
            )
}
            export default Barra2 