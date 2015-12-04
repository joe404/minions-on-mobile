import React from 'react';
import {render} from 'react-dom';
import {Router,Route,IndexRoute,Link,History} from 'react-router';
import {createHashHistory,useBasename} from 'history';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Help from './components/Help/Help';

const history = useBasename(createHashHistory)({basename: '/'});

render((
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Dashboard}/>
      <Route path="profile" component={Profile}/>
      <Route path="*" component={Help}/>
    </Route>
  </Router>
), document.getElementById('app'));
