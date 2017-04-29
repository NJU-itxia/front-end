import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRedirect, Redirect, Link, IndexLink } from 'react-router';

import App from './App';

import LoginPage from './component/login/LoginPage';
import StudentLogin from './component/login/StudentLogin';
import KnightLogin from './component/login/KnightLogin';

import StudentPage from './component/student/StudentPage';
import NewOrder from './component/student/NewOrder';
import History from './component/student/History';
import studentModel from './model/student';

import KnightPage from './component/knight/KnightPage';
import Orders from './component/knight/order/Orders';
import Message from './component/knight/Message';
import Setting from './component/knight/Setting';

function redirectIfLoggedIn(nextState, replaceState) {
  // if (cookie.load('studentLoggedIn')) {
  //   replaceState({ nextPathname: nextState.location.pathname }, '/order');
  // }
}

function requireStudentLogin() {

}

function requireKnightLogin() {

}

const routes = (
  <Router history={browserHistory}>
		<Route path="/" component={App}>
      <IndexRedirect to="/login/student" />
      <Route
				path="login"
				component={LoginPage}
				onEnter={redirectIfLoggedIn}
			>
        <Route path="student" component={StudentLogin} />
        <Route path="knight" component={KnightLogin} />
      </Route>
      <Route
				path="student"
				component={StudentPage}
				onEnter={requireStudentLogin}
			>
        <Route path="order" component={NewOrder} />
        <Route path="history" component={History} />
      </Route>
      <Route
				path="knight"
				component={KnightPage}
				onEnter={requireKnightLogin}
			>
        <Route path="orders" component={ Orders } />
        <Route path="message" component={Message} />
        <Route path="setting" component={Setting} />
      </Route>
		</Route>
  </Router>
);

function renderAll() {
  console.log('render');
	ReactDOM.render(routes, document.getElementById('app'));
}

studentModel.subscribe(renderAll);
renderAll();
