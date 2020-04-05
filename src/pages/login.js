import React, { useState } from 'react';
import logo from '../components/rappilogo.png';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
//hook de validar
import useValidation from '../hooks/useValidation';

import validarIniciarSesion from '../validation/validarIniciarSesion';
import { useHistory } from 'react-router-dom';

const STATE_INCIAL = {
  nombre: '',
  email: '',
  password: '',
  idRt: '',
  telefono: '',
};
const Login = () => {
  let history = useHistory();

  const [error, setError] = useState('');

  const user = useUser();
  const firebase = useFirebaseApp();
  const STATE_INCIAL = {
    nombre: '',
    email: '',
    password: '',
    idRt: '',
    telefono: '',
  };
  const {
    valores,
    errores,

    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidation(STATE_INCIAL, validarIniciarSesion, iniciarSesion);

  const { nombre, email, telefono, idRt, password } = valores;
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
    <form onSubmit={handleSubmit} noValidate>
      <div className="soyrappi my-2">
        <img width="80px" src={logo} alt="soyrappi" />
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
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
        <div className="form-group col-md-6">
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
        </div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" htmlFor="gridCheck">
            acepto terminos
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-block btn-ttc btn-login">
        Iniciar sesion
      </button>
    </form>
  );
};

export default Login;
