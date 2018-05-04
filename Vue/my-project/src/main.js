// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//import 是 ES6 的写法，import Vue from './Vue' 等价于 var App = require("./App");


Vue.config.productionTip = false
console.log("App 的主入口");

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
