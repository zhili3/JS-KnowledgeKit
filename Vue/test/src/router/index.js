import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import VueResource from 'vue-resource'
import News from '@/components/News'
import NewsContent from '@/components/NewsContent'

Vue.use(Router)
Vue.use(VueResource)

var routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '*', name: 'Default', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/news', name: 'News', component: News},
  {path: '/newscontent/:newid', name: 'NewsContent', component: NewsContent}
]

var router = new Router({
  routes
})

export default router
