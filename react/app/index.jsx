'use strict';

//react-ie8 hack https://www.npmjs.com/package/react-ie8
import es5Shim from 'es5-shim';
import es5Sham from 'es5-shim/es5-sham';
import consolePolyFill from 'console-polyfill';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'

import App from './components/app/app.jsx'
import About from './components/about/about.jsx'

import commonStyles from './common/css/base.scss';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="about" component={About} />
  </Router>
), document.getElementById('app'))
