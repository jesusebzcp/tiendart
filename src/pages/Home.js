import React from 'react';
import Registro from '../components/Registro';
import { useUser } from 'reactfire';
import logo from '../shared/logo1.png';
import Lottie from 'react-lottie';
import animationData from './moto.json';
import Productos from './productos';
const Home = () => {
  const user = useUser();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      {user && <Productos />}

      {!user && (
        <div>
          {' '}
          <div className="text-center">
            <h2 className="slogan text-center">
              TiendaRt <img src={logo} width="60px" />
            </h2>
            <p className="mp">Si aun no tienes Cuenta Registrate</p>
          </div>
          <div className="contenedorHome">
            <div className="contenedorHome2 text-center">
              <div className="lottie1 mt-2">
                <Lottie options={defaultOptions} height={200} width={200} />
                <h3>Heroes de capa naranja!</h3>
                <p>Adquire las herramientas para ser de los mejores</p>
              </div>
            </div>
            <div className="cont-form ">
              <Registro />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
