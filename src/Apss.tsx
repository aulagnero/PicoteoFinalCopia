import { Route, Routes } from "react-router-dom";
import Menu from "./Home/header";
import Footernaciones from "./Home/Footer";
import MainHome from "./Home/Mainhome";
import Layout from "./Layout";

import NotFound from "./Productos/Error";
//import MainCheckOut from "./Productos/CheckOut/MainCheckOut";
import MainChecDatos from "./Productos/CheckOut/MaincheckoutDatos";
import MainChecPago from "./Productos/CheckOut/MainCheckourPagar";
import MainChecPagoExito from "./Productos/CheckOut/BodyExitoPago"
import { FormularioUsuario } from "./Productos/CheckOut/FormularioUsuario";
import { ProtectedComponent } from "./InicioSesion/ProtectedRoute";
import LoginJWT from "./InicioSesion/Login2";
import MainMantenedor from "./Mantenedor/mainMantenedor";
import PaginaCajas from "./Paginas/PaginaCajas";
//import DetalleProducto from "./Componentes/DetalleProducto";
import PaginaVinos from "./Paginas/PaginaVinos";
import PaginaProductos from "./Paginas/PaginaProductos";
import PaginaSnacks from "./Paginas/PaginaSnacks";
import PaginaCarro from "./Paginas/PaginaCarro";
import PaginaUsuario from "./Paginas/PaginaUsuario";
import PaginaLogin from "./Paginas/PaginaLogin";
import PaginaRegistro from "./Paginas/PaginaRegistro";
import PaginaPago from "./Paginas/PaginaPago";
import PaginaExito from "./Paginas/PaginaExito";


function Apps() {

    return (
        <>

            <div>

                <Menu />


                <Routes>
                    <Route path="/" element={<Layout />} >

                        <Route path="/" element={<MainHome />} />
                        <Route path="/home" element={<MainHome />} />
                        <Route path="/cajas" element={<PaginaCajas />} />
                        <Route path="/vinos" element={<PaginaVinos />} />
                        <Route path="/checkoutdatos" element={<MainChecDatos />} />
                        <Route path="/checkoutPago" element={<MainChecPago />} />
                        <Route path="/checkoutPagoExito" element={<MainChecPagoExito />} />
                        <Route path="/FormRegistro" element={<FormularioUsuario />} />
                        <Route path="/mantenedor" element={<MainMantenedor />} />
                        <Route path="/carrito" element={<PaginaCarro />} />
                        <Route path="/login" element={<LoginJWT />} />
                        <Route path="/snacks" element={<PaginaSnacks />} />

                        <Route path="/registro" element={<PaginaRegistro />} />
                        <Route path="/invitado" element={<PaginaUsuario />} />
                        <Route path="/usuario" element={<PaginaLogin />} />
                        
                        <Route path="/pago" element={<PaginaPago />} />
                        <Route path="/exito" element={<PaginaExito />} />


                        <Route path="/protected" element={
                            <ProtectedComponent allowedRoles={["admin", "admin-search", "user-search"]}>
                                <MainMantenedor />
                            </ProtectedComponent>
                        } />
                        <Route path="/detalle-producto/:id" element={<PaginaProductos />} />
                        
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
            <Footernaciones />

        </>
    )
}
export default Apps;




