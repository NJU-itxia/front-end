import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

import App from './App';
import Wait from './order/Wait';
import Message from './Message';
import Setting from './Setting';
import Logout from './Logout';


const history = useBasename(createHistory)({
  basename: '/knight'
})

const routeInstance = (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="/wait" component={Wait}/>
      <Route path="/message" component={Message}/>
      <Route path="/setting" component={Setting}/>
      <Route path="/logout" component={Logout}/>
    </Route>
  </Router>
);

ReactDOM.render(routeInstance, document.getElementById('app'))
