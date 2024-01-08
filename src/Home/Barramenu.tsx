import { Link, Outlet } from "react-router-dom";
import "./barra.css"



function Barra2() {

    return (

        <div className="container">
            <div className="row columnas-menu">

                <div className="col-1"></div>

                <div className="col-2 item-menu">
                    <button className="productoss">

                        <Link className="a-menu" to="/cajas">Cajas</Link>


                    </button>
                </div>
                <div className="col-2 item-menu">
                    <button className="productoss">

                    <Link className="a-menu" to="/vinos">Vinos</Link>
                    
                    </button>
                </div>
                <div className="col-2 item-menu">
                    <button className="productoss">
                        <Link className="a-menu" to="/snacks">Snacks</Link>
                    </button>
                </div>
                <div className="col-5 item-menu">
                    <button className="productoss" disabled>
                        Preguntas frecuentes
                    </button>
                    <Outlet />
                </div>
            </div>
        </div>
            )
}
            export default Barra2 