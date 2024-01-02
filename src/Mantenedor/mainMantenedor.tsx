
import ListarProductos from "../CRUD/ListarProductos";
import PaginaVinos from "../Paginas/PaginaVinos";
import FormIngresoProdBS from "./Mantenedor";
import "./Mantenedor.css";


export default function MainMantenedor() {
    return (
        <div className=" container ">
            <div className="row fondo-mantenedor">
                <FormIngresoProdBS />

                <ListarProductos />

                <PaginaVinos />
            </div>
        </div>
    )
}