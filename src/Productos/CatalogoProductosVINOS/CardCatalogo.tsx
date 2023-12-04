
import "./CardCatalogo.css"


function CardCatalogo() {

    return (
        <>
            <div className='container-card-catalogo'>
                <div className="imagen"></div>
                <div className="titulos-card">
                    <div>LOREM IPSUM</div>
                    <div>$XXXX</div>
                </div>
                <div className="texto-card">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </div>

                <div className="contenedor-botones-card">
                    <div className="botones-card">
                        <div className="boton-cant-card">-</div>
                        <div className="boton-cant-card">1</div>
                        <div className="boton-cant-card">+</div>
                    </div>
                    <div className="botones-card"><img src="src/Home/imagenes/Group 39678.svg" alt="carrito" /></div>
                </div>



            </div>

        </>
    )
}

export default CardCatalogo;