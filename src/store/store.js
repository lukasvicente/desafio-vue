import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        singUp:{
            name:'',
            nickName:'',
            email:'',
            phone:'',
            day:0,
            month:0,
            year:0,
            age:'',
            acceptTerms: false,
            linkedin:'',
            github:'',
            certificate:[{
                instituicion: null,
                graduation: null,
                name: null,
            }],
            errorInput:{}
        },
        auhtenticate: false,
        
    },
    mutations:{
        setSingUp(state, payload){
            const { atribute, value } = payload;
            state.singUp[atribute] = value;
        },
        addError(state, payload){            

            state.singUp.errorInput = payload;
        },
    }
});


