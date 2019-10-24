import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

//应用初始状态
const state ={
    count:10
}

//定义需要的mutations

const mutations ={
    INCREAMENT (state) {
        state.count++;
    },
    DECREMENT (state) {
        state.count--;
    }
}

//创建store实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations

})