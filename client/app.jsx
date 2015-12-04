import React from 'react';
import {render} from 'react-dom';
import {Router,Route,IndexRoute,Link,History} from 'react-router';
import {createHashHistory,useBasename} from 'history';

import Main from './components/Main/Main';

import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Help from './components/Help/Help';

const history = useBasename(createHashHistory)({basename: '/'});

// http://www.material-ui.com/#/get-started/installation
// Some components use react-tap-event-plugin to listen for touch events. This dependency is temporary and will go away once react v1.0 is released. Until then, be sure to inject this plugin at the start of your app.
let injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

render((
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Dashboard}/>
      <Route path="profile" component={Profile}/>
      <Route path="*" component={Help}/>
    </Route>
  </Router>
), document.getElementById('app'));
