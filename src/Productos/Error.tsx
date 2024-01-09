import "./Error.css"


import { Link } from 'react-router-dom';
import logo from "../Home/imagenes/logo-naciones.png"

function NotFound() {
  return (
    <div className="not-found">
      <img
        src={logo}
        alt="Icono en movimiento"
        className="animated-icon"
      />
      <h1 className="titulo-exito">404 - Página no encontrada</h1>
      <p className="texto-exito">Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" ><button className="boton-navegacion">Volver a la página principal</button></Link>
    </div>
  );
}

export default NotFound;
<Link to="/home"><img  src={logo} alt="" /> </Link>