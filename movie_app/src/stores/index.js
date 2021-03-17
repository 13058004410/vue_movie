import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        name:''
    },
    mutations:{
        USER_NAME(state,payload){
            state.name=payload.name
        }
    },
    actions:{},
    getters:{},
    modules:{
        user
    }
})