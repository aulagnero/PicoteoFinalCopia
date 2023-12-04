import CardOpiniones from "./CardOpiniones";
import "./OpinionesVinos.css"


function opinionesVinos() {

    return (

        <>

            <div className="contenedor-volver">
                <div className="titulo-maridaje">Opiniones</div>
            </div>

            <div className="contenedor-maridaje">
            <CardOpiniones/>
            <CardOpiniones/>
            <CardOpiniones/>
            <CardOpiniones/>
            </div>



        </>

    )
}

export default opinionesVinos;