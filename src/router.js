import Vue from "vue";
import Router from "vue-router";

import SingUp from './pages/SingUp'
import Profile from './pages/Profile';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[{
        path: '/',
        component: SingUp
        },
        {
        path: '/profile',
        component: Profile
        },
    ]
})