<template>
   <div>
    <v-conteiner maxWidth="md">
        <v-card>
            <v-typography>Team Sing up</v-typography>
            <v-form-tabs-sing-up />
            <v-button >Next</v-button>
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

export default {
    name: 'formSingUp',
    components: {
        'v-button':Button, 
        'v-form-tabs-sing-up':TabsFormSingUp,
        'v-typography':Typography,
        'v-conteiner' : Conteiner,
        'v-card' : Card
    },

}
</script>

<style>

</style>