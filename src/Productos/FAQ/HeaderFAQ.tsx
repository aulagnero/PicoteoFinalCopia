import "./bodyFAQ.css"

 function HeaderFAQ() {

    return (

        <div className="contenedor-header">
            <div className="texto-faq">
                <h2 className="texto-1">Preguntas Frecuentes</h2>
            </div>
            <div className="contenedor-input-faq">
                        <input type="text" placeholder="Escribe aquí tu pregunta" className="input-faq"></input>
                        <button className="boton-faq"><img src="src/assets/LUPA 1.svg" alt="buscar" /></button>
            </div>
        </div>

    )
}

export default HeaderFAQ;