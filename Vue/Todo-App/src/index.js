import App from "./App.vue"
import Vue from 'vue'
import './assets/styles/test.css'
import './assets/images/bg.jpg'



const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
    render: (h) => h(App)
}).$mount(root);