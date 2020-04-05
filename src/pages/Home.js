import React from 'react';
import Registro from '../components/Registro';
import { useUser } from 'reactfire';
import Producto from './productos';

const Home = () => {
  const user = useUser();

  return (
    <>
      {user && <Producto />}
      {!user && <Registro />}
    </>
  );
};

export default Home;
