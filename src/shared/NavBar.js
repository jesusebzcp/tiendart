import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import userLogo from './user.png';

import { Link, useHistory } from 'react-router-dom';
import { useUser, useFirebaseApp } from 'reactfire';
import 'firebase/auth';

const NavBAR = () => {
  let history = useHistory();

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '26px',
      height: '20px',
      left: '26px',
      top: '26px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#a90000',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };
  const user = useUser();
  const firebase = useFirebaseApp();
  //cerrando sesion
  const cerrarSesion = async () => {
    await firebase.auth().signOut();
    history.push('/');
  };

  return (
    <Menu styles={styles}>
      {user && (
        <span className="menu-item mb-3 profile text-center" href="/">
          <img src={userLogo} width="100px" />
        </span>
      )}

      {user && (
        <span id="home" className="menu-item mb-3 profile text-center" href="/">
          {user.displayName}
        </span>
      )}
      {!user && (
        <Link
          id="about"
          className="menu-item mb-3 profile text-center"
          to={'/'}
        >
          Home
        </Link>
      )}

      {user && (
        <span
          id="about"
          className="menu-item mb-3 profile text-center"
          href="/about"
        >
          Productos
        </span>
      )}

      {user && (
        <button onClick={cerrarSesion} className="btn btn-ttc  btn-block">
          Cerrar sesion
        </button>
      )}
      {!user && (
        <Link to={'/login'} className="btn btn-ttc btn-login  btn-block">
          Iniciar sesion
        </Link>
      )}
      <a
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/jesus-briceño-zerpa-848b18183"
      >
        {' '}
        By create Jesus briceño
      </a>
    </Menu>
  );
};

export default NavBAR;
