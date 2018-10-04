// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TodoApp from './TodoApp'
import Router from 'vue-router'

Vue.config.productionTip = false

Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { TodoApp },
  template: '<TodoApp/>'
})
