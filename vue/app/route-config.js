export function configRouter (router) {

  // normal routes
  router.map({
    // basic example
    '/about': {
      component: require('./components/about.vue')
    },

    '/': {
      component: require('./components/home.vue')
    },

    '/home': {
      component: require('./components/home.vue')
    }
  })
}
