import Vue from "vue";
import Router from "vue-router";

import SingUp from './pages/SingUp'
import Profile from './pages/Profile';
import store from '@/store/store';

import FormSingUpPersonal from '@/components/organisms/FormSingUp/FormSingUpPersonal.vue';
import FormSingUpSocial from '@/components/organisms/FormSingUp/FormSingUpSocial.vue';
import FormSingUpCertificate from '@/components/organisms/FormSingUp/FormSingUpCertificate.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/singup',
            component: SingUp,
            children: [{
                    path: 'personal',
                    name: 'personal',
                    component: FormSingUpPersonal
                },
                {
                    path: 'social',
                    name: 'social',
                    component: FormSingUpSocial
                },
                {
                    path: 'certificate',
                    name: 'certificates',
                    component: FormSingUpCertificate,
                    beforeEnter:(to, from, next ) => {
                        const linkedin = store.state.singUp.linkedin;
                        const github = store.state.singUp.github;
                        
                        if( linkedin && github ){
                            next();
                        }else{
                            next('/singup/personal')
                        }
         
                    }
                }
            ]
        },
        {
            path: '/profile',
            name:'profile',
            component: Profile,
            beforeEnter:(to, from, next ) => {
                const auhtenticate = store.state.auhtenticate;
                
                if(auhtenticate){
                    next();
                }else{
                    next('/singup/personal')
                }
 
            }
        },
        {
            path:'*',
            redirect: 'singup/personal'
        },
    ]
})