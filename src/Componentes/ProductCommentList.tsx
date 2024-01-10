import React, { useState, useEffect } from 'react';
import Card4, { Comentario } from './CardComment.tsx'; // Asegúrate de que esta ruta es correcta
import './ProductCardList.css';

function ProductCommentList() {
    const [comentarios, setComentarios] = useState<Comentario[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/comentarios')
        .then(response => response.json())
        .then(data => {
            // Desordena el array de comentarios
            for (let i = data.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [data[i], data[j]] = [data[j], data[i]];
            }
            // Selecciona los primeros 4 comentarios
            setComentarios(data.slice(0, 4));
        });
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