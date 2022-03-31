<template>
   <div>
    <v-conteiner maxWidth="md">
        <v-card>
            <v-typography>Team Sing up</v-typography>
            <v-form-tabs-sing-up />
            <v-button @click="onNext" >{{nameButton}}</v-button>
        </v-card>
    </v-conteiner>
   </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue';
import TabsFormSingUp from '@/components/organisms/TabsFormSingUp.vue';
import Typography from '@/components/atoms/Typography.vue';
import Conteiner from '@/components/atoms/Conteiner.vue';
import Card from '@/components/atoms/Card.vue';
import { required, email,  } from '@/utils/validate';
export default {
    name: 'formSingUp',
    data(){
        return {
            nameRouteComponente: '',
            error: [],
            nameButton: 'Next'
        }
    },
    components: {
        'v-button':Button, 
        'v-form-tabs-sing-up':TabsFormSingUp,
        'v-typography':Typography,
        'v-conteiner' : Conteiner,
        'v-card' : Card
    },
    created() {
      this.nameRouteComponente = this.$route.name; 
      this.nameButtonRoute(this.nameRouteComponente)
      
    },
    computed:{
        name(){
            return this.$store.state.singUp.name;
        },
        nickName(){
            return this.$store.state.singUp.nickName;
        },
        email(){
            return this.$store.state.singUp.email;
        },
        phone(){
            return this.$store.state.singUp.phone;
        },
        age(){
            return this.$store.state.singUp.age;
        },
        github(){
            return this.$store.state.singUp.github;
        },
        linkedin(){
            return this.$store.state.singUp.linkedin;
        },
        
    },
    methods:{
        nameButtonRoute(value){
            this.nameButton = value === 'certificates' ? 'Finish' : 'Next';
        },
        
        isValidateRequired(value){
            const message = required(this[value]);
            const data = {
                name: value,
                message
            }

            return message ? this.$store.commit('addError', data ) : true;
 
        },
        isValidateEmail(value){
            const message = email(this[value]);
            const data = {
                name: value,
                message
            }

            return message ? this.$store.commit('addError', data ) : true;
        },
        // @TODO - Refatorando validate
        // isValidate(type = [], name){

        //     const requiredValue = type.find( value => value === 'required')
        //     const numberValue = type.find( value => value === 'number')
            
        //     if(requiredValue){
                
        //         const message = required(this[name]);
                 
        //         const data = {
        //             name,
        //             message
        //         }
        //         return message ? this.$store.commit('addError', data) : true
        //     }
        //     if(numberValue){ 
        //         const message = number(this[name]);
        //         console.log(message, 'message')
        //     }
             
        // },
        async onNext(){ 
            if(this.nameRouteComponente === 'personal'){
                const validateName = await this.isValidateRequired('name');
                const validateNickName = await this.isValidateRequired('nickName');
                const validateEmail = await this.isValidateEmail('email');
                const validateAge = await this.isValidateRequired('age');
                const validatePhone = await this.isValidateRequired('phone');

                const nextPersonal = validateName && validateNickName && validateEmail && validateAge && validatePhone;

                if(nextPersonal){

                    this.$router.push({name: 'social'})
                }
                    
            }else if(this.nameRouteComponente === 'social'){
                
                const validateLinkedin = await this.isValidateRequired('linkedin');
                const validateGithub = await this.isValidateRequired('github');
                const nextSocial = validateLinkedin && validateGithub;

                if(nextSocial){
                     
                    this.$router.push({name: 'certificates'})
                }

            }else if(this.nameRouteComponente === 'certificates'){
                this.$store.state.auhtenticate = true;
                this.$router.push({name: 'profile'})
            }
 
        }
    },
    watch:{
        $route(to){
            this.nameRouteComponente = to.name
            this.nameButtonRoute(this.nameRouteComponente)
        },
 
    }

}
</script>

<style>

</style>