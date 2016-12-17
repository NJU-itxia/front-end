import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRedirect, Redirect, Link, IndexLink } from 'react-router';

import App from './App';

import LoginApp from './component/login/Login';
import StudentLogin from './component/login/Student';
import KnightLogin from './component/login/Knight';

import StudentApp from './component/student/Student';
import NewOrder from './component/student/NewOrder';
import MyOrder from './component/student/MyOrder';
import Logout from './component/student/Logout';
import studentModel from './model/student';

import KnightApp from './component/knight/Knight';
import Orders from './component/knight/order/Orders';
import Message from './component/knight/Message';
import Setting from './component/knight/Setting';

function redirectIfLoggedIn(nextState, replaceState) {
  // if (cookie.load('studentLoggedIn')) {
  //   replaceState({ nextPathname: nextState.location.pathname }, '/order');
  // }
  // else if (cookie.load('itxiaLoggedIn')) {
  //   replaceState({ nextPathname: nextState.location.pathname }, '/knight/wait');
  // }
}

function requireStudentLogin() {

}

function requireKnightLogin() {

}

const router = (
  <Router history={browserHistory}>
		<Route path="/" component={App}>
      <IndexRedirect to="/login/student" />
      <Route path="login" component={LoginApp} onEnter={redirectIfLoggedIn}>
        <Route path="student" component={StudentLogin} />
        <Route path="knight" component={KnightLogin} />
      </Route>
      <Route path="student" component={() => { (<StudentApp model={studentModel}/>) }} onEnter={requireStudentLogin} >
        <Route path="order" component={NewOrder} />
        <Route path="history" component={MyOrder} />
        <Route path="logout" component={Logout} />
      </Route>
      <Route path="knight" component={KnightApp} onEnter={requireKnightLogin}>
        <Route path="orders" component={ Orders } />
        <Route path="message" component={Message} />
        <Route path="setting" component={Setting} />
      </Route>
		</Route>
  </Router>
);

function render() {
	ReactDOM.render(router, document.getElementById('app'));
}

studentModel.subscribe(render);

render();
