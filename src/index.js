import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router, Route, IndexRoute, Redirect, Link, IndexLink } from 'react-router';

import App from './App';
import Wait from './order/Wait';
import Message from './Message';
import Setting from './Setting';
import Logout from './Logout';
import Login from './Login';
import KnightLogin from './KnightLogin';
import NewOrder from './NewOrder';
import MyOrder from './MyOrder';


const history = useBasename(createHistory)({
  basename: '/'
})

const routeInstance = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="login" component={Login}/>
      <Route path="order" component={NewOrder}/>
      <Route path="history" component={MyOrder}/>
      <Route path="knight/login" component={KnightLogin}/>
      <Route path="knight/wait" component={Wait}/>
      <Route path="knight/message" component={Message}/>
      <Route path="knight/setting" component={Setting}/>
      <Route path="logout" component={Logout}/>
    </Route>
  </Router>
);

ReactDOM.render(routeInstance, document.getElementById('app'))
