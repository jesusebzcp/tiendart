import React from 'react';
import Producto from '../components/producto';

const Productos = () => {
  return (
    <>
      {' '}
      <h2>Bienvenido a la Tienda RT </h2>
      <p>
        Compra! hasta tu hogar asi podras activarte y trabajar sin ir a hacer
        largas colas y evitar el contagio
      </p>
      <div className="mb-4">
        {' '}
        <Producto />
      </div>
    </>
  );
};

export default Productos;
