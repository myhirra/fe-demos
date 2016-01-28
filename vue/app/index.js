import Hotcss from './common/js/hotcss.js';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './index.vue';
import { configRouter } from './route-config'

import AnimateCss from 'animate.css/animate.css';

// install router
Vue.use(VueRouter);

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
});

// configure router
configRouter(router);

window.router = router;

// boostrap the app
const App = Vue.extend(require('./index.vue'))
router.start(App, '#app')
