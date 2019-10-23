import Vue from 'vue'
import Router from 'vue-router'
import indexPage from './components/header.vue'
import homePage from './components/home.vue'
import aboutPage from './components/about.vue'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            component:homePage
        },
        {
            path:'/about',
            component:aboutPage,
        }
    ]
})
