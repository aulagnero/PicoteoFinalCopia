import "./BodyFAQ.css"

function FormularioFAQ() {

    return (

        <div className="contenedor-body-checkout">

            <div className="contenedor-envio">
                <div className="contactos-formulario">
                    <div className="item-contacto">
                        <img src="src/assets/CORREO.svg" alt="email" />
                        hola@vinapicoteo.cl
                    </div>

                    <div className="item-contacto">
                        <img src="src/assets/telefono.svg" alt="email" />
                        2236 5679
                    </div>

                    <div className="item-contacto">
                        <img src="src/assets/telefono.svg" alt="email" />
                        +569 2468 1357
                    </div>

                </div>

                <form className="datos-envio">

                    <div className="campo-select">

<div className="contenedor-inputs">
    <label htmlFor="nombre" className="label-inputs">Nombre Completo</label>
    <input type="text" placeholder="Nombres y Apellidos" className="campo-corto"></input>
    <div className="help-text">Help Text</div>
</div>

<div className="contenedor-inputs">
    <label htmlFor="rut" className="label-inputs">RUT</label>
    <input type="number" placeholder="12.345.678-9" className="campo-corto"></input>
    <div className="help-text">Help Text</div>
</div>

</div>

                    <div className="campo-select">

                        <div className="contenedor-inputs">
                            <label htmlFor="email" className="label-inputs">Correo electrónico</label>
                            <input type="text" placeholder="nombre@servidor.com" className="campo-corto"></input>
                            <div className="help-text">Help Text</div>
                        </div>

                        <div className="contenedor-inputs">
                            <label htmlFor="telefono" className="label-inputs">Teléfono</label>
                            <input type="number" placeholder="123456789" className="campo-corto"></input>
                            <div className="help-text">Help Text</div>
                        </div>

                    </div>

                    <div className="contenedor-inputs">
                        <label htmlFor="referencia" className="label-inputs">Mensaje</label>
                        <textarea placeholder="Escribe algo..." className="campo-formulario-faq"></textarea>
                        <div className="help-text">Help Text</div>
                    </div>


                    <button type="submit" className="boton-formulario">Enviar</button>
                </form>
            </div>
            
        </div>

    )
}

export default FormularioFAQ;