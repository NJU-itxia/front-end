import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Redirect, Link, IndexLink } from 'react-router';
import cookie from 'react-cookie';

import LoginApp from './component/login/App';
import StudentLogin from './component/login/Student';
import KnightLogin from './component/login/Knight';

import StudentApp from './conponent/student/App';
import NewOrder from './component/student/NewOrder';
import MyOrder from './component/student/MyOrder';
import Logout from './components/student/Logout';

import Orders from './component/knight/order/Orders';
import Message from './component/knight/Message';
import Setting from './component/knight/Setting';
import KnightLogin from './component/knight/KnightLogin';

function redirectIfLoggedIn(nextState, replaceState) {
  if (cookie.load('studentLoggedIn')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/order');
  }
  else if (cookie.load('itxiaLoggedIn')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/knight/wait');
  }
}

function requireStudentLogin() {

}

function requireKnightLogin() {

}

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="login" component={LoginApp} onEnter={redirectIfLoggedIn}>
        <Route path="student" component={StudentLogin} />
        <Route path="knight" component={KnightLogin} />
      </Route>
      <Route path="student" component={StudentApp} onEnter={requireStudentLogin} >
        <Route path="order" component={NewOrder} />
        <Route path="history" component={MyOrder} />
        <Route path="logout" component={Logout} />
      </Route>
      <Route path="knight" component={KnightApp} onEnter={requireKnightLogin}>
        <Route path="orders" component={ DealRequirement } onEnter={requireITXiaLogin} />
        <Route path="message" component={Message} onEnter={requireITXiaLogin} />
        <Route path="setting" component={Setting} onEnter={requireAdminLogin} />
      </Route>
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('app'));
