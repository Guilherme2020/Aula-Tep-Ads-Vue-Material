// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './routes'

var VueMaterial = require('vue-material')

Vue.config.productionTip = false

Vue.use(VueRouter)

import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)

/* eslint-disable no-new */

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
