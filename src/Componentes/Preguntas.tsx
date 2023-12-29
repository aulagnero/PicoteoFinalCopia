import Accordion from 'react-bootstrap/Accordion';
import './Preguntas.css';

const Preguntas = () => {
    return (
        <div className='container contenedor-faq'>
            <div className="row">
                <div className="col-12 titulo-faq"> Preguntas Frecuentes </div>
            </div>
            <div className="cuerpo-faq">
                <Accordion defaultActiveKey="0" className="mi-acordeon">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="pregunta"> ¿Cómo puedo filtrar para encontrar el vino perfecto para mí?</div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="respuesta"> Selecciona el filtro de tu interés en el menú de la izquierda y podrás ordenar los resultados por mejor calificación o mejor precio para encontrar tu combinación perfecta. <br />Puedes filtrar por tipo de evento, tipo de vino, variedad de uva, perfil de sabor, país de origen, maridaje con comida y calificación.
                                <br /> Al combinar estos filtros, podrás reducir las opciones y encontrar el vino que se ajuste mejor a tus preferencias y necesidades.</div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className="pregunta"> He encontrado mi vino. ¿Dónde puedo ver las sugerencias de maridaje con comida para mi vino?</div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="respuesta">Una vez que hayas encontrado el vino que te gusta, puedes buscar las sugerencias de maridaje con comida en la descripción del vino. También puedes explorar las etiquetas o palabras clave asociadas al vino para obtener ideas de maridaje </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <div className="pregunta"> Devoluciones y Pagos </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="pregunta">¿Cuál es su política de devoluciones? </div>
                            <div className="respuesta">Queremos que tengas una experiencia maravillosa con nuestra Caja de Vinos y Maridajes. Si encuentras algún problema con tu pedido, por favor, ponte en contacto con nuestro equipo de atención al cliente en un plazo de 7 días tras recibir tu paquete. Estaremos encantados de ayudarte y encontrar una solución adecuada </div> <br />

                            <div className="pregunta">¿Qué métodos de pago aceptan?</div>
                            <div className="respuesta">Aceptamos las principales tarjetas de crédito, incluyendo Visa, Mastercard, American Express y Discover. Tu información de pago se encripta y se procesa de forma segura para garantizar una transacción segura</div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <div className="pregunta"> Contáctanos </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="pregunta">¿Cómo puedo ponerme en contacto con el equipo de atención al cliente? </div>
                            <div className="respuesta">Si tienes alguna pregunta, inquietud o comentario, nuestro equipo de atención al cliente está aquí para ayudarte. Puedes comunicarte con nosotros a través de nuestro formulario de contacto en el sitio web o enviando un correo electrónico a [email protected] Nos esforzamos por responder a todas las consultas en un plazo de 24 horas. </div> <br />


                            <div className="pregunta">¿Existen otras formas de mantenerme actualizado/a?</div>
                            <div className="respuesta">¡Por supuesto! Síguenos en redes sociales como Instagram y Facebook para estar informado/a sobre las últimas noticias, promociones y emocionantes novedades sobre nuestra Caja de Vinos y Maridajes.</div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Preguntas;