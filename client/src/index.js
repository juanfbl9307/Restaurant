import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Reserves from './Reserve';
import ListReserves from './ReserveList';
import Restaurants from './restaurants';
import Delete from './Delete'
import Modify from './Modify'
import { BrowserRouter, Route, Switch } from "react-router-dom";


const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/reservar" component={Reserves} />
      <Route path="/reservas" component={ListReserves} />
      <Route path="/restaurantes" component={Restaurants} />
      <Route path="/eliminarrestaurantes" component={Delete} />
      <Route path="/modificarrestaurantes" component={Modify} />




    </Switch>
  </BrowserRouter>,
  rootElement
);
