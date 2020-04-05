import React from 'react';
// react router
import { BrowserRouter as Routing, Route, Switch } from 'react-router-dom';
//pages
import Home from './pages/Home';
//components
import NavBar from './shared/NavBar';
import Login from './pages/login';
import Productos from './pages/productos';

function Router() {
  return (
    <Routing>
      <NavBar />
      <div className="contentPages">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/productos" component={Productos} />
        </Switch>
      </div>
    </Routing>
  );
}

export default Router;
