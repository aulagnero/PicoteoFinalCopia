import { Route, Routes } from "react-router-dom";
import Menu from "./Home/header";
import Footernaciones from "./Home/Footer";
import MainHome from "./Home/Mainhome";
import Layout from "./Layout";
import MainCajaMEs from "./Productos/Caja mes/MainCajaMes";
import MainMisterio from "./Productos/Caja Misteriosa/MainMisterio";
import MainSuscripcion from "./Productos/Suscripcion/MainSuscripcion";
import NotFound from "./Productos/Error";
import MainCheckOut from "./Productos/CheckOut/MainCheckOut";
import MainChecDatos from "./Productos/CheckOut/MaincheckoutDatos";
import MainChecPago from "./Productos/CheckOut/MainCheckourPagar";
import MainChecPagoExito from "./Productos/CheckOut/BodyExitoPago"
import { FormularioUsuario } from "./Productos/CheckOut/FormularioUsuario";
import { ProtectedComponent } from "./InicioSesion/ProtectedRoute";
import LoginJWT from "./InicioSesion/Login2";
import MainMantenedor from "./Mantenedor/mainMantenedor";






function Apps() {

    return (
        <>

            <div>

                <Menu />


                <Routes>
                    <Route path="/" element={<Layout />} >

                        <Route path="/" element={<MainHome />} />
                        <Route path="/home" element={<MainHome />} />
                        <Route path="/productos" element={<MainCajaMEs />} />
                        <Route path="/cajamisteriosas" element={<MainMisterio />} />
                        <Route path="/suscripciones" element={<MainSuscripcion />} />
                        <Route path="/checkout" element={<MainCheckOut />} />
                        <Route path="/checkoutdatos" element={<MainChecDatos />} />
                        <Route path="/checkoutPago" element={<MainChecPago />} />
                        <Route path="/checkoutPagoExito" element={<MainChecPagoExito />} />
                        <Route path="/FormRegistro" element={<FormularioUsuario />} />
                        <Route path="/mantenedor" element={<MainMantenedor />} />
                        <Route path="/login" element={<LoginJWT />} />

                        <Route path="/protected" element={
                            <ProtectedComponent allowedRoles={["admin", "admin-search", "user-search"]}>
                                <MainMantenedor />
                            </ProtectedComponent>
                        } />



                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
            <Footernaciones />

        </>
    )
}
export default Apps;




