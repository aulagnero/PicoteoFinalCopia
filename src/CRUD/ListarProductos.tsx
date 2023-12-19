import { useEffect, useState } from "react";
import "../Mantenedor/stilos.css"
// import ProductCard from './ProductosHome';



const ListarProductos = () => {
    const [products, setProducts] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});

  


    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const handleEdit = (product) => {
        setEditingProductId(product.id);
        setEditedProduct(product);
    };

    const handleUpdate = (id) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editedProduct),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then(data => {
                // Actualiza la lista de productos con el producto actualizado
                setProducts(products.map(product => product.id === data.id ? data : product));
                // Limpia el producto que se está editando
                setEditingProductId(null);
                setEditedProduct({});
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                // Elimina el producto de la lista de productos en el estado
                setProducts(products.filter(product => product.id !== id));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleChange = (e, field) => {
        setEditedProduct({ ...editedProduct, [field]: e.target.value });
    };

    return (
        <div>
            <div className="container col-12 ">
                <div className="row border-bottom mb-3 ">
                    <div className="col-1">ID</div>
                    <div className="col-2">Nombre</div>
                    <div className="col-3">Description</div>
                    <div className="col-2">Category</div>
                    <div className="col-1">Price</div>
                    <div className="col-2">Image</div>
                    <div className="col-1">Actions</div>
                </div>
                {products.map(product => (
                    <div key={product.id} className="row border-bottom mb-3">
                        <div className="col-1">
                            {editingProductId === product.id ? (
                                <input type="text" value={editedProduct.id} onChange={(e) => handleChange(e, 'id')} />
                            ) : (
                                product.id
                            )}
                        </div>
                        <div className="col-2">
                            {editingProductId === product.id ? (
                                <input type="text" value={editedProduct.nombre} onChange={(e) => handleChange(e, 'nombre')} />
                            ) : (
                                product.nombre
                            )}
                        </div>
                        <div className="col-3">
                            {editingProductId === product.id ? (
                                <input type="text" value={editedProduct.categoria} onChange={(e) => handleChange(e, 'categoria')} />
                            ) : (
                                product.categoria
                            )}
                        </div>
                        <div className="col-2">
                            {editingProductId === product.id ? (
                                <input type="text" value={editedProduct.descripcion} onChange={(e) => handleChange(e, 'descripcion')} />
                            ) : (
                                product.descripcion
                            )}
                        </div>
                        <div className="col-1">
                            {editingProductId === product.id ? (
                                <input type="text" value={editedProduct.precio} onChange={(e) => handleChange(e, 'precio')} />
                            ) : (
                                product.precio
                            )}
                        </div>
                        <div className="col-2">
                            {editingProductId === product.id ? (
                                <input type="text" value={editedProduct.imagen} onChange={(e) => handleChange(e, 'imagen')} />
                            ) : (
                                <img src={product.imagen} alt={product.nombre} className="product-image2" />
                            )}
                        </div>
                        <div className="col-1 d-flex justify-content-evenly ">
                            {editingProductId === product.id ? (
                                <button className="btn btn-primary row" onClick={() => handleUpdate(product.id)}>Save</button>
                            ) : (
                                <div className="d-flex ">
                                    <div >
                                        <button className="btn btn-primary botoneditar" onClick={() => handleEdit(product)}>Edit</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-danger  botoneditar" onClick={() => handleDelete(product.id)}>Delete</button>
                                    </div>
                                </div>

                            )}
                        </div>

                       
                    </div>
                ))}
            </div>

        </div >
    )
};

export default ListarProductos;