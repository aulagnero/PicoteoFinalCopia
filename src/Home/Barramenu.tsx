import { useNavigate, Outlet } from "react-router-dom";
import "./barra.css"



function Barra2() {

    const navigate = useNavigate();

    return (

        <div className="container">
            <div className="row columnas-menu">

                <div className="col-1"></div>

                <div className="col-2 item-menu">
                    <button
                        className="productoss"
                        onClick={() => navigate('/cajas')}>
                        Cajas
                    </button>
                </div>
                <div className="col-2 item-menu">
                    <button 
                    className="productoss"
                    onClick={() => navigate('/vinos')}>
                    Vinos

                    </button>
                </div>
                <div className="col-2 item-menu">
                    <button className="productoss"
                    onClick={() => navigate('/snacks')}>
                    Snacks
                    </button>
                </div>
                <div className="col-5 item-menu">
                    <button className="productoss" 
                    onClick={() => navigate('/mantenedor')}>
                        Preguntas frecuentes
                    </button>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Barra2 