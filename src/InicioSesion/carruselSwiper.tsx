import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Producto1 from "../imagenes/producto2MC.webp";
import Producto1de1 from "../imagenes/imagen2de2.webp";
import Producto2 from "../imagenes/producto222.webp"
import Producto2de2 from "../imagenes/imagen2de2.webp"
import "./sebastian.css";


SwiperCore.use([Navigation, Pagination]);

function CarruselSwiper() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{ width: '100%', height: '100%' }}
            observer={true}
            observeParents={true}
            breakpoints={{
                // cuando la ventana es >= 640px
                390: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                // cuando la ventana es >= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                // cuando la ventana es >= 1024px
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
        >
            <div className='bordepadre'>


            {/* Producto1     */}

                <SwiperSlide>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <div className="card" style={{ width: "10rem" }}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <SwiperSlide>
                                    <img src={Producto1} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Producto1de1} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <br />
                            </Swiper>
                            <div className="card-body">
                                <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                <p className="card-text">Descripcion</p>
                                <p className='preciocard'>259.990</p>
                                <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c" target="_blank"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>
                
            {/* Producto2     */}


            <SwiperSlide>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <div className="card" style={{ width: "10rem" }}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <SwiperSlide>
                                    <img src={Producto2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                {/* <SwiperSlide>
                                    <img src="" className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide> */}
                                <br />
                            </Swiper>
                            <div className="card-body">
                                <h5 className="card-title">Final Carrera</h5>
                                <p className="card-text">Limited Switch Omron D4b-4111n</p>
                                <p className='preciocard'>$79.990</p>
                                <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>

            {/* Producto3     */}

            <SwiperSlide>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <div className="card" style={{ width: "10rem" }}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <SwiperSlide>
                                    <img src={Producto2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Producto2de2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <br />
                            </Swiper>
                            <div className="card-body">
                                <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                <p className="card-text">$259.990</p>
                                <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>
            {/* Producto4     */}


            <SwiperSlide>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <div className="card" style={{ width: "10rem" }}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <SwiperSlide>
                                    <img src={Producto2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Producto2de2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <br />
                            </Swiper>
                            <div className="card-body">
                                <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                <p className="card-text">$259.990</p>
                                <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>

            {/* Producto5     */}

            <SwiperSlide>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <div className="card" style={{ width: "10rem" }}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <SwiperSlide>
                                    <img src={Producto2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Producto2de2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <br />
                            </Swiper>
                            <div className="card-body">
                                <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                <p className="card-text">$259.990</p>
                                <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>
            {/* Producto6     */}

            <SwiperSlide>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <div className="card" style={{ width: "10rem" }}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <SwiperSlide>
                                    <img src={Producto2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Producto2de2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <br />
                            </Swiper>
                            <div className="card-body">
                                <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                <p className="card-text">$259.990</p>
                                <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>

            {/* Producto7     */}

            <SwiperSlide>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <div className="card" style={{ width: "10rem" }}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <SwiperSlide>
                                    <img src={Producto2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Producto2de2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <br />
                            </Swiper>
                            <div className="card-body">
                                <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                <p className="card-text">$259.990</p>
                                <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>

            {/* Producto8     */}

            <SwiperSlide>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <div className="card" style={{ width: "10rem" }}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <SwiperSlide>
                                    <img src={Producto2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Producto2de2} className="card-img-top imagenproducto2" alt="..." />
                                </SwiperSlide>
                                <br />
                            </Swiper>
                            <div className="card-body">
                                <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                <p className="card-text">$259.990</p>
                                <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>




            </div>

            <br />
            <br />
            <br />
        </Swiper>
    );
}


export default CarruselSwiper;