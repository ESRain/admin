import Vue from 'vue';
import Vuex from 'vuex';
import tab from './tab';
Vue.use(Vuex)


const mutations ={
    bian(state){
        state.isCollapse = !state.isCollapse
    }
}
const state ={
    isCollapse:false
}

export default new Vuex.Store({
    mutations,
    state,
    modules:{
        tab
    }
})