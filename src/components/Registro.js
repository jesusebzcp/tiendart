import React, { useState } from 'react';
import logo from './rappilogo.png';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
//hook de validar
import useValidation from '../hooks/useValidation';

import validarCrearCuenta from '../validation/validarCrearCuenta';
import { useHistory } from 'react-router-dom';

const Registro = () => {
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
  } = useValidation(STATE_INCIAL, validarCrearCuenta, crearCuenta);

  async function crearCuenta() {
    try {
      const nuevoUsuario = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      history.push('/productos');
      return await nuevoUsuario.user.updateProfile({
        displayName: nombre,
      });
    } catch (error) {
      console.error('Hubo un error el usuario ya existe', error.message);
      setError(error.message);
    }
  }

  const { nombre, email, telefono, idRt, password } = valores;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="soyrappi my-2">
        <img width="80px" src={logo} alt="soyrappi" />
      </div>
      {errores.idRt && (
        <div className="alert alert-danger" role="alert">
          {errores.idRt}
        </div>
      )}{' '}
      <div className="form-group">
        <label htmlFor="idRt">ID Rapitendero</label>
        <input
          type="text"
          className="form-control"
          id="idRt"
          placeholder="1234 Main St"
          onChange={handleChange}
          name="idRt"
          value={idRt}
          onBlur={handleBlur}
        />
      </div>
      {errores.nombre && (
        <div className="alert alert-danger" role="alert">
          {errores.nombre}
        </div>
      )}
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Nombre"
            onChange={handleChange}
            name="nombre"
            value={nombre}
            onBlur={handleBlur}
          />
        </div>
        {errores.telefono && (
          <div className="alert alert-danger" role="alert">
            {errores.telefono}
          </div>
        )}
        <div className="form-group col-md-6">
          <label htmlFor="telefono">Telefono</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            placeholder="Telefono"
            onChange={handleChange}
            name="telefono"
            value={telefono}
            onBlur={handleBlur}
          />
        </div>
        {errores.email && (
          <div className="alert alert-danger" role="alert">
            {errores.email}
          </div>
        )}
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
            Acepto terminos y condiciones
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-block btn-ttc btn-login">
        Resgistarme
      </button>
    </form>
  );
};

export default Registro;
