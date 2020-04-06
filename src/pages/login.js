import React, { useState } from 'react';
import logo from '../components/rappilogo.png';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
//hook de validar
import useValidation from '../hooks/useValidation';

import validarIniciarSesion from '../validation/validarIniciarSesion';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './lavarmanos.json';

const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  let history = useHistory();

  const [error, setError] = useState('');

  const firebase = useFirebaseApp();
  const STATE_INCIAL = {
    nombre: '',
    email: '',
    password: '',
  };
  const {
    valores,
    errores,

    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidation(STATE_INCIAL, validarIniciarSesion, iniciarSesion);

  const { nombre, email, password } = valores;
  async function iniciarSesion() {
    try {
      const nuevoUsuario = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      history.push('/productos');
      return await nuevoUsuario.user.updateProfile({
        displayName: nombre,
      });
    } catch (error) {
      console.error('Hubo un error al autentica al usuario', error.message);
      setError(error.message);
    }
  }

  return (
    <div className="rg">
      <div className="rg1">
        <div className="lottie1 mt-2 text-center">
          <Lottie options={defaultOptions} height={200} width={200} />
          <h3>Cuidate!</h3>
          <p>Recuerda lavarte las manos cuando llegues a tu casa</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} noValidate className="rg2  ">
        <div className="soyrappi my-2">
          <img width="80px" src={logo} alt="soyrappi" />
        </div>
        <div className="rg3">
          {errores.email && (
            <div className="alert alert-danger" role="alert">
              {errores.email}
            </div>
          )}

          <div className="form-group col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errores.password && (
            <div className="alert alert-danger" role="alert">
              {errores.password}
            </div>
          )}

          <div className="form-group col">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={password}
              onBlur={handleBlur}
            />

            <button
              type="submit"
              className=" mt-4 btn btn-block btn-ttc btn-login"
            >
              Iniciar sesion
            </button>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
