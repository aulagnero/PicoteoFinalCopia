
import "./CardOpiniones.css"


function CardOpiniones() {

    return (
        <>
            <div className='container-card-opiniones'>

                <div className="contenedor-usuario-opiniones">
                    <img src="src/Home/imagenes/Ellipse 29.svg" alt="avatar de usuario" />
                    <div className="nombre-usuario">Nombre</div>

                </div>

                <div className="contenedor-valoracion">
                                <div className="numero-valoracion">5.0</div>
                                <div><img src="src/Home/imagenes/Vector-estrella.svg" alt="star" /></div>
                                <div><img src="src/Home/imagenes/Vector-estrella.svg" alt="star" /></div>
                                <div><img src="src/Home/imagenes/Vector-estrella.svg" alt="star" /></div>
                                <div><img src="src/Home/imagenes/Vector-estrella.svg" alt="star" /></div>
                                <div><img src="src/Home/imagenes/Vector-estrella.svg" alt="star" /></div>
                            </div>

                <div className="texto-card-opiniones">¨Esta caja fué sensacional, cumplió con todas mis expectativas.¨ </div>





            </div>

        </>
    )
}

export default CardOpiniones;