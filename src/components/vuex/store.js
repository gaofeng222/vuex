import Vue from 'vue'
import Vuex from 'vuex'
import { setTimeout } from 'timers';

Vue.use(Vuex);

//增加一个常亮
const state = {
    count : 1
}

const mutations={
    add(state,n){
        state.count += n;
    },
    reduce(state){
        state.count--;
    }
}
const getters = {
    count : function(state){
        return state.count += 100;
    }
}

const actions = {
    addAction(context){
        context.commit('add',1)
        setTimeout(()=>{context.commit('reduce')},3000)
        console.log('我比reduce提前执行');
    },
    reduceAction({commit}){
        commit('reduce')
    }
}

const moduleA = {
    state,
    mutations,
    getters,
    actions
}
export  default new Vuex.Store({
    modules : {
        a : moduleA
    }
})


