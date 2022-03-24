import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        singUp:{
            name:'',
            nickname:'',
            email:'',
            phone:'',
            day:'',
            month:'',
            year:'',
            linkedin:'',
            github:'',
            certificate:[],
        }
    },
    mutations:{
        setSingUp(state, payload){
            const { atribute, value } = payload;
            state.singUp[atribute] = value;
        },
    }
});


