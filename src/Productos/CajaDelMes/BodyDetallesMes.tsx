import "./BodyDetallesMes.css"

function BodyDetallesVino() {

    return (

        <div className="contenedor-detalles-vino">
            <div className="contenedor-detalles-titulo">
                <div className="detalles-titulo">OCTOBERBOX</div>
            </div>

            <div className="card-detalles">
                <div className="carrusel-imagenes"></div>
                <div className="contenedor-detalles-producto">
                    <div className="detalles-producto">
                        <div className="informacion-producto">
                            <div className="titulo-producto">LOREM IPSUM</div>
                            <div className="subtitulo-producto">LOREM IPSUM | LOREM IPSUM | LOREM IPSUM</div>
                            <div className="contenedor-valoracion">
                                <div className="numero-valoracion">5.0</div>
                                <div><img src="src/Home/imagenes/Vector-estrella.svg" alt="star" /></div>
                                <div><img src="src/Home/imagenes/Vector-estrella.svg" alt="star" /></div>
                                <div><img src="src/Home/imagenes/Vector-estrella.svg" alt="star" /></div>
                                <div><img src="src/Home/imagenes/Vector-estrella.svg" alt="star" /></div>
                                <div><img src="src/Home/imagenes/Vector-estrella.svg" alt="star" /></div>
                            </div>
                            <div className="texto-producto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad mini</div>

                        </div>
                        <div className="precio-producto">$XX.XXX</div>
                    </div>
                    <div className="contenedor-botones-producto">
                        <div className="numero-valoracion">COMPRA UNITARIA</div>
                        <div className="botones-producto">
                            <div className="boton-cant-prod">-</div>
                            <div className="boton-cant-prod">1</div>
                            <div className="boton-cant-prod">+</div>
                        </div>
                        <div className="numero-valoracion">$XX.XXX</div>
                        <div className="botones-producto"><img src="src/Home/imagenes/Group 39678.svg" alt="carrito" /></div>
                    </div>

                    <div className="contenedor-botones-suscripcion">
                        <div className="numero-valoracion-suscripcion">SUSCRIPCIÓN</div>
                        <div>
                            <select name="seleccionar-orden" id="seleccionar-orden">
                                <option value="mejor-valorados">PLAN MENSUAL | Entrega mensual</option>
                                <option value="mejor-descuento">PLAN SEMESTRAL | Entrega mensual</option>
                                <option value="menor-precio">PLAN ANUAL | Entrega mensual</option>
                            </select>
                        </div>
                        <div className="botones-producto">
                            <div className="boton-cant-prod">-</div>
                            <div className="boton-cant-prod">1</div>
                            <div className="boton-cant-prod">+</div>
                        </div>
                        <div className="numero-valoracion">$XX.XXX</div>
                        <div className="botones-producto"><img src="src/Home/imagenes/Group 39678.svg" alt="carrito" /></div>
                    </div>


                </div>
            </div>

            <div></div>

        </div>

    )
}

export default BodyDetallesVino;