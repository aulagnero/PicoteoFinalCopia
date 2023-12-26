
import Card from '../../Home/Card';
import "./App.css"

function CajasAnteriores() {

  return (
    <>
      <div className='principal-container'>
        <div className='titulo'><h2>Conoce nuestras cajetas anteriores</h2></div>
          <div className='card-container'>
            <div className='flecha'><img src="src/assets/flecha-izq.png" alt="retroceder" /></div>
            <Card/>
            <Card/>
            <Card/>
            <div className='flecha'><img src="src/assets/flecha-der.png" alt="avanzar" /></div>
          </div>
          
        </div>
    </>
  )
}

export default CajasAnteriores;
