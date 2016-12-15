import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Redirect, Link, IndexLink } from 'react-router';
import cookie from 'react-cookie';

import App from './App';
import DealRequirement from './order/DealRequirement';
import Message from './Message';
import Setting from './Setting';
import Logout from './Logout';
import Login from './Login';
import KnightLogin from './KnightLogin';
import NewOrder from './NewOrder';
import MyOrder from './MyOrder';


function requireLogin(nextState, replaceState) {
  if ( (!cookie.load('studentLoggedIn')) || (!cookie.load('itxiaLoggedIn')) ) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}


function requireAdminLogin(nextState, replaceState) {
  if (!cookie.load('adminLoggedIn')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/knight/login');
  }
}


function requireITXiaLogin(nextState, replaceState) {
  if (!cookie.load('itxiaLoggedIn')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/knight/login');
  }
}


function requireStudentLogin(nextState, replaceState) {
  if (!cookie.load('studentLoggedIn')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

function handleIfLoggedIn(nextState, replaceState) {
  if (cookie.load('studentLoggedIn')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/order');
  } else if (cookie.load('itxiaLoggedIn')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/knight/wait');
  }
}

function handleLogout(nextState, replaceState) {
  cookie.remove('userLoggedIn', {path: '/'});
  cookie.remove('studentLoggedIn', {path: '/'});
  cookie.remove('itxiaLoggedIn', {path: '/'});
  cookie.remove('adminLoggedIn', {path: '/'});
  replaceState({ nextPathname: nextState.location.pathname }, '/login');
}

const routeInstance = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} onEnter={handleIfLoggedIn} />
      <Route path="login" component={Login} onEnter={handleIfLoggedIn} />
      <Route path="order" component={NewOrder} onEnter={requireStudentLogin} />
      <Route path="history" component={MyOrder} onEnter={requireStudentLogin} />
      <Route path="knight/login" component={KnightLogin} onEnter={handleIfLoggedIn} />
      <Route path="knight/DealRequirement" component={ DealRequirement } onEnter={requireITXiaLogin} />
      <Route path="knight/message" component={Message} onEnter={requireITXiaLogin} />
      <Route path="knight/setting" component={Setting} onEnter={requireAdminLogin} />
      <Route path="logout" component={Logout} onEnter={handleLogout} />
    </Route>
  </Router>
);


ReactDOM.render(routeInstance, document.getElementById('app'));
