import React from 'react';
import './CardMantenedor.css'

interface Product {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    valoracion: number;
    imagen: string[];
}

interface CardMantenedorProps {
    product: Product;
    editingProductId: number | null;
    editedProduct: Product | null;
    handleEdit: (product: Product) => void;
    handleUpdate: (id: number) => void;
    handleDelete: (id: number) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, field: keyof Product) => void;
}

const CardMantenedor: React.FC<CardMantenedorProps> = ({ product, editingProductId, editedProduct, handleEdit, handleUpdate, handleDelete, handleChange }) => {
    return (

        <div className="card-mantenedor">
            {product.imagen.map((url, index) => (
                <img key={index} src={url} alt={`${product.nombre} ${index + 1}`} className="foto-productos" />
            ))}
            <div className="card-details-mantenedor">
                <div className='col-12'>
                    <label
                        htmlFor="nombre"
                        className="form-label label-inputs">
                        Nombre
                    </label>
                    <input
                        className='titulo-mantenedor'
                        type="text" value={editingProductId === product.id ? editedProduct?.nombre : product.nombre} readOnly={editingProductId !== product.id} onChange={(e) => handleChange(e, 'nombre')} />
                </div>

                <div className='col-12'>
                    <label
                        htmlFor="descripcion"
                        className="form-label label-inputs">
                        Descripción
                    </label>
                    <input
                        className='texto-mantenedor'
                        type="text"
                        value={editingProductId === product.id ? editedProduct?.descripcion : product.descripcion} readOnly={editingProductId !== product.id} onChange={(e) => handleChange(e, 'descripcion')} />
                </div>
                <div className="row campo-form">
                    <div className='col-6'>
                        <label
                            htmlFor="precio"
                            className="form-label label-inputs">
                            Precio
                        </label>
                        <input
                            className='campo-input'
                            type="number"
                            value={editingProductId === product.id ? editedProduct?.precio : product.precio} readOnly={editingProductId !== product.id} onChange={(e) => handleChange(e, 'precio')} />
                    </div>

                    <div className='col-6'>
                        <label
                            htmlFor="valoracion"
                            className="form-label label-inputs">
                            Valoración
                        </label>
                        <input
                            className='campo-input'
                            type="number"
                            value={editingProductId === product.id ? editedProduct?.valoracion : product.valoracion} readOnly={editingProductId !== product.id} onChange={(e) => handleChange(e, 'valoracion')} />
                    </div>
                </div>
            </div>

            {editingProductId === product.id ? (
                <button
                    className="boton-mantenedor"
                    onClick={() => handleUpdate(product.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 18C19 18.551 18.552 19 18 19H16V16C16 15.448 15.553 15 15 15H9C8.447 15 8 15.448 8 16V19H6C5.448 19 5 18.551 5 18V6C5 5.449 5.448 5 6 5H8V10C8 10.552 8.447 11 9 11H13C13.553 11 14 10.552 14 10C14 9.448 13.553 9 13 9H10V5H13.172C13.435 5 13.692 5.107 13.879 5.293L18.707 10.121C18.896 10.31 19 10.562 19 10.829V18ZM10 19H14V17H10V19ZM20.121 8.707L15.293 3.879C14.727 3.312 13.973 3 13.172 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H9H15H18C19.654 21 21 19.654 21 18V10.829C21 10.027 20.687 9.273 20.121 8.707Z" fill="#707382" />
                    </svg>
                </button>
            ) : (
                <div className="mantenedor-actions">
                    <button
                        className="boton-mantenedor"
                        onClick={() => handleEdit(product)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0187 10.6787L13.3237 7.98367L15.2717 6.03467L17.9657 8.72867L16.0187 10.6787ZM9.07965 17.6247L6.10265 17.8957L6.36665 14.9397L11.9837 9.32267L14.6797 12.0187L9.07965 17.6247ZM19.4037 7.33767L19.4027 7.33667L16.6647 4.59867C15.9237 3.85967 14.6507 3.82467 13.9487 4.52967L4.95265 13.5257C4.62665 13.8507 4.42465 14.2827 4.38265 14.7397L4.00365 18.9097C3.97765 19.2047 4.08265 19.4967 4.29265 19.7067C4.48165 19.8957 4.73665 19.9997 4.99965 19.9997C5.03065 19.9997 5.06065 19.9987 5.09065 19.9957L9.26065 19.6167C9.71865 19.5747 10.1497 19.3737 10.4747 19.0487L19.4717 10.0517C20.1997 9.32167 20.1687 8.10367 19.4037 7.33767Z" fill="#707382" />
                        </svg>
                    </button>

                    <button
                        className="boton-mantenedor"
                        onClick={() => handleDelete(product.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3337 29.8333C18.3337 30.8416 17.5087 31.6666 16.5003 31.6666C15.492 31.6666 14.667 30.8416 14.667 29.8333V22.5C14.667 21.4916 15.492 20.6666 16.5003 20.6666C17.5087 20.6666 18.3337 21.4916 18.3337 22.5V29.8333ZM29.3337 29.8333C29.3337 30.8416 28.5087 31.6666 27.5003 31.6666C26.492 31.6666 25.667 30.8416 25.667 29.8333V22.5C25.667 21.4916 26.492 20.6666 27.5003 20.6666C28.5087 20.6666 29.3337 21.4916 29.3337 22.5V29.8333ZM33.0003 35.3333C33.0003 36.3435 32.179 37.1666 31.167 37.1666H12.8337C11.8217 37.1666 11.0003 36.3435 11.0003 35.3333V15.1666H33.0003V35.3333ZM18.3337 8.43463C18.3337 8.15046 18.726 7.83329 19.2503 7.83329H24.7503C25.2747 7.83329 25.667 8.15046 25.667 8.43463V11.5H18.3337V8.43463ZM38.5003 11.5H36.667H29.3337V8.43463C29.3337 6.08063 27.2785 4.16663 24.7503 4.16663H19.2503C16.7222 4.16663 14.667 6.08063 14.667 8.43463V11.5H7.33366H5.50033C4.49199 11.5 3.66699 12.325 3.66699 13.3333C3.66699 14.3416 4.49199 15.1666 5.50033 15.1666H7.33366V35.3333C7.33366 38.3656 9.80133 40.8333 12.8337 40.8333H31.167C34.1993 40.8333 36.667 38.3656 36.667 35.3333V15.1666H38.5003C39.5087 15.1666 40.3337 14.3416 40.3337 13.3333C40.3337 12.325 39.5087 11.5 38.5003 11.5Z" fill="#707382" />
                        </svg>
                    </button>
                </div>
            )}

        </div>

    );
};

export default CardMantenedor;