import "./MaridajeVinos.css"
import CardCatalogo from "../CatalogoProductosVINOS/CardCatalogo";

function MaridajeVinos() {

    return (

        <>

            <div className="contenedor-volver">
                <div className="titulo-maridaje">Marida muy bien con estos Snacks</div>
            </div>

            <div className="contenedor-maridaje">
            <CardCatalogo/>
            <CardCatalogo/>
            <CardCatalogo/>
            <CardCatalogo/>

            </div>



        </>

    )
}

export default MaridajeVinos;