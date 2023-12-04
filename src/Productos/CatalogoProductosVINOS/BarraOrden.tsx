import "./BarraOrden.css";

function BarraOrden () {

    return (

        <div className="ContainerOrden">
            <div className="ordenar">ORDENAR POR:</div>
            <div>
         {/*        <label htmlFor="selecionar-orden">seleccionar</label>  */}
                <select name="seleccionar-orden" id="seleccionar-orden">
                    <option value="mejor-valorados">Mejor Valorados</option>
                    <option value="mejor-descuento">Mejor descuento</option>
                    <option value="menor-precio">Menor Precio</option>
                    <option value="mayor-precio">Mayor Precio</option>
                </select>
            </div>




        </div>






    )
}

export default BarraOrden;