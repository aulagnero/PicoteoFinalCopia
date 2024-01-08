import React, { useEffect, useState } from "react";
import "../Mantenedor/stilos.css"
import CardMantenedor from '../Mantenedor/CardMantenedor';

interface Product {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    valoracion: number;
    imagen: string[];
}

const ListarProductos: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [editingProductId, setEditingProductId] = useState<number | null>(null);
    const [editedProduct, setEditedProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then((data: Product[]) => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const handleEdit = (product: Product) => {
        setEditingProductId(product.id);
        setEditedProduct(product);
    };

    const handleUpdate = (id: number) => {
        if (editedProduct) {
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
                .then((data: Product) => {
                    setProducts(products.map(product => product.id === data.id ? data : product));
                    setEditingProductId(null);
                    setEditedProduct(null);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };

    const handleDelete = (id: number) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                setProducts(products.filter(product => product.id !== id));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Product) => {
        if (editedProduct) {
            setEditedProduct({
                ...editedProduct,
                [field]: field === 'precio' || field === 'valoracion' ? Number(e.target.value) : e.target.value
            });
        }
    };

    return (
        <div className="container">
            <div className="row fila">
                <div className="col-12">
                    <h2 className="textoo">Mantenedor de productos</h2>
                </div>
                {products.map((product) => (
                    <CardMantenedor
                        key={product.id}
                        product={product}
                        editingProductId={editingProductId}
                        editedProduct={editedProduct}
                        handleEdit={handleEdit}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        handleChange={handleChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListarProductos;