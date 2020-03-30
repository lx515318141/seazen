import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        token:null,
        user:{}
    },
    mutations:{
        setToken(state,token){
            state.token = token
        },
        setUser(state,user){
            state.user.username = user
        },
        updataToken(state,token){
            state.token = token
        }
    },
    actions:{

    },
})