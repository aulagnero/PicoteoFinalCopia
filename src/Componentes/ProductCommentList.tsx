import React, { useState, useEffect } from 'react';
import Card4, { Comentario } from '../Componentes/Card4.tsx'; // Asegúrate de que esta ruta es correcta
import './ProductCardList.css';

function ProductCommentList() {
    const [comentarios, setComentarios] = useState<Comentario[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/comentarios')
        .then(response => response.json())
        .then(data => setComentarios(data));
    }, []);


  return (
      
      <div className='container snack-recomendado'>
        {comentarios.map((comentario, index) => (
        <Card4 key={index} comentario={comentario} />
        ))}
      </div>
    
  );
}

export default ProductCommentList;