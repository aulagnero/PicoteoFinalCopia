import './BotonesProducto.css';

interface BotonesUsuarioProps {
  onLoginClick: () => void;
  onUsuarioClick: () => void;
  onRegistroClick: () => void;
}

const BotonesUsuario: React.FC<BotonesUsuarioProps> = ({ onLoginClick, onUsuarioClick, onRegistroClick }) => {

    return (
        <div className='container'>
            <div className="row botonera-navegacion">
 
                 <div className="col-4 contenedor-boton">
                 
                  <button className="boton-navegacion" onClick={onLoginClick}> 
                  Iniciar sesión 
                  </button>
                  
                </div>
                
                <div className="col-4 contenedor-boton">
                
                <button className="boton-navegacion" onClick={onUsuarioClick}>
                    Usuario
                </button>
                
                </div>

                <div className="col-4 contenedor-boton">
                
                <button className="boton-navegacion" onClick={onRegistroClick}>
                    Registrarse
                </button>
                
                </div>
            
            </div>
        </div>
    );
};

export default BotonesUsuario;