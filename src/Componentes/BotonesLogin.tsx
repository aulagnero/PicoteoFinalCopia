import './BotonesProducto.css';

interface BotonesLoginProps {
  onRegistroClick: () => void;
  onLoginClick: () => void;
}

const BotonesLogin: React.FC<BotonesLoginProps> = ({ onRegistroClick, onLoginClick }) => {

    return (
        <div className='container'>
            <div className="row botonera-navegacion">
 
                 <div className="col-6 contenedor-boton">
                 
                  <button className="boton-login" onClick={onLoginClick}> 
                  Iniciar sesión 
                  </button>
                  
                </div>
                
                <div className="col-6 contenedor-boton">
                
                <button className="boton-login" onClick={onRegistroClick}>
                    Registrarse
                </button>
                
                </div>
            
            </div>
        </div>
    );
};

export default BotonesLogin;