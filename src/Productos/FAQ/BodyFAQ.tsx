import "./BodyFAQ.css"

function BodyFAQ() {

    return (

        <div className="contenedor-body-faq">
            <div className="filtros-body-vinos">

                <p className="ordenar">Categorías</p>

                <button className="filtro">¿Qué es Viña Picoteo?</button>

                <button className="filtro">Regalos</button>

                <button className="filtro">Envíos</button>
       

                <button className="filtro">Devoluciones</button>


                <button className="filtro">Información de tu cuenta</button>

                <button className="filtro">Pagos</button>

            </div>

            <div className="contenedor-faq">
                <div className="contenedor-pregunta">
                    <div>Pregunta 1</div>
                    <img src="src/assets/ABAJO 1.svg" alt="abrir" />
                </div>
                <div className="contenedor-pregunta">
                    <div>Pregunta 2</div>
                    <img src="src/assets/ABAJO 1.svg" alt="abrir" />
                </div>
                <div className="contenedor-pregunta">
                    <div>Pregunta 3</div>
                    <img src="src/assets/ABAJO 1.svg" alt="abrir" />
                </div>
                <div className="contenedor-pregunta">
                    <div>Pregunta 4</div>
                    <img src="src/assets/ABAJO 1.svg" alt="abrir" />
                </div>
                <div className="contenedor-pregunta">
                    <div>Pregunta 5</div>
                    <img src="src/assets/ABAJO 1.svg" alt="abrir" />
                </div>
                <div className="contenedor-pregunta">
                    <div>Pregunta 6</div>
                    <img src="src/assets/ABAJO 1.svg" alt="abrir" />
                </div>
            </div>

        </div>

    )
}

export default BodyFAQ;