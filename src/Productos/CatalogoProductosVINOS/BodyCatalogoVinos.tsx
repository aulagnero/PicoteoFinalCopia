import "./BodyCatalogoVinos.css"
import CardCatalogo from "./CardCatalogo.tsx"

function BodyCatalogoVinos() {

    return (
        <div className="container-body-vinos">
            <div className="filtros-body-vinos">

                <p className="ordenar">FILTRAR POR</p>
                <select name="filtro" id="filtro">
                    <option value="tipo-de-evento">TIPO DE EVENTO</option>
                </select>

                <select name="filtro" id="filtro">
                    <option value="tipo-de-evento">TIPO DE VINO</option>
                </select>

                <select name="filtro" id="filtro">
                    <option value="tipo-de-evento">PERFIL DE SABOR</option>
                </select>

                <select name="filtro" id="filtro">
                    <option value="tipo-de-evento">RANGO DE PRECIO</option>
                </select>

                <select name="filtro" id="filtro">
                    <option value="tipo-de-evento">PAÍS / REGIÓN</option>
                </select>

                <select name="filtro" id="filtro">
                    <option value="tipo-de-evento">MARIDAJE</option>
                </select>

                <select name="filtro" id="filtro">
                    <option value="tipo-de-evento">MÁS FILTROS</option>
                </select>

            </div>

            <div className="container-card-productos">
                <CardCatalogo/>
                <CardCatalogo/>
                <CardCatalogo/>
                <CardCatalogo/>
                <CardCatalogo/>
                <CardCatalogo/>
                <CardCatalogo/>
                <CardCatalogo/>
                <CardCatalogo/>

            </div>


        </div>


    )

}

export default BodyCatalogoVinos;