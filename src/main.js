// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import './assets/styles/base.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import Mock from './mock'

Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
    routes
})
router.beforeEach((to,from,next)=>{
    if(to.path == 'login'){
        sessionStorage.removeItem('user')
    }
    let user = JSON.parse(sessionStorage.getItem('user'))
    if(!user && to.path != '/login'){
        next({path:'/login'})
    }else{
        next()
    }
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
