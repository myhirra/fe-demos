'use strict';

//react-ie8 hack https://www.npmjs.com/package/react-ie8
import es5Shim from 'es5-shim';
import es5Sham from 'es5-shim/es5-sham';
import consolePolyFill from 'console-polyfill';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import cartApp from './reducers'

import App from './components/app/app.jsx'
import About from './components/about/about.jsx'

import commonStyles from './common/css/base.scss';

const store = createStore(cartApp)

render((
  <App />
), document.getElementById('app'))

store.subscribe(render)
