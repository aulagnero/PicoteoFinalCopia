import React from 'react';

interface ImageProps {
  url: string;
  onRemove: () => void;
}

const Image: React.FC<ImageProps> = ({ url, onRemove }) => {
  return (
    <div>
      <img src={url} alt="" width="50" height="50" />
      <button onClick={onRemove}>Eliminar</button>
    </div>
  );
};

export default Image;