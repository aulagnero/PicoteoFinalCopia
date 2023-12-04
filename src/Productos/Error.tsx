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
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="back-button">Volver a la página principal</Link>
    </div>
  );
}

export default NotFound;
<Link to="/home"><img  src={logo} alt="" /> </Link>