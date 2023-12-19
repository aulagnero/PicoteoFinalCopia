
import ListarProductos from "../CRUD/ListarProductos";
import FormIngresoProdBS from "./Mantenedor";
import "./Mantenedor.css";


export default function MainMantenedor() {
    return (
        <div>
            <br /><br /><br />
            <FormIngresoProdBS />
            <br />  
            <h2>Mantenedor de Productos</h2>
            <ListarProductos />
            <br />
            <br />
        </div>
    )
}