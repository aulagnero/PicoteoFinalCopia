import Prdoducto1 from "../imagenes/Producto1.webp";
import CarruselSwiper from "./carruselSwiper";
import "./sebastian.css";
import 'swiper/css';
import Banner1 from "../imagenes/Banner1.jpg"
import Banner2 from "../imagenes/Banner2.jpg"
import Banner3 from "../imagenes/Banner3.jpg"

function ProductoSoltec() {
    return (
        <div className="container-fluid">
            <div >
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <div className="container">
            <h2 className="titulo">Nuestros Productos</h2>
            </div>
            <br />
            <br />
            <div className="container-fluid row">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Prdoducto1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                    </div>
                    <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                </div>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Prdoducto1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                </div>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Prdoducto1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary ">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                </div>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Prdoducto1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary ">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                </div>
                {/* Seccion 2 de productos */}
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Prdoducto1} className="card-img-top imagenproducto2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Prdoducto1} className="card-img-top imagenproducto2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Prdoducto1} className="card-img-top imagenproducto2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Prdoducto1} className="card-img-top imagenproducto2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                    </div>
                </div>


                {/* seccion 3 de productos */}


                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={Prdoducto1} className="card-img-top imagenproducto3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Prdoducto1} className="card-img-top imagenproducto3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Prdoducto1} className="card-img-top imagenproducto3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Prdoducto1} className="card-img-top imagenproducto3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <CarruselSwiper />
            <br />
            <br />
            <br />
            <br />


        </div>
    )
}
export default ProductoSoltec;