import React from 'react';
import logo from './logo1.png';
import { Link } from 'react-router-dom';
import { useUser, useFirebaseApp } from 'reactfire';
import 'firebase/auth';

const NavBar = () => {
  const user = useUser();
  const firebase = useFirebaseApp();
  //cerrando sesion
  const cerrarSesion = async () => {
    await firebase.auth().signOut();
  };
  console.log(user);
  return (
    <nav className="navbar navbar-expand-lg  d-flex justify-content-between navbar-light bg-light fixed-top">
      <div className="logo">
        <Link to={'/'} className="navbar-brand mx-auto " href="#">
          <img src={logo} width="50px" />
        </Link>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse btn-btn"
        id="navbarSupportedContent"
      >
        <div className=" ">
          {!user && (
            <Link to={'/login'} className="btn btn-ttc btn-login">
              Iniciar sesion
            </Link>
          )}
          {user && <p className="mr-4">{user.displayName}</p>}
          {user && (
            <button
              onClick={cerrarSesion}
              type="submit"
              className="btn btn-ttc "
            >
              Cerrar sesion
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
