<template>
  <div>
    <v-tabs>
      <v-tab name="Personal" :selected="true">
        <v-input placeholder="Full Name"  v-model="name" />
        <v-input placeholder="Nickname" v-model="nickName" />
        <v-input placeholder="Email" type="email" v-model="email" />
        <div class="row">
          <div class="col">
            <v-input placeholder="Day" />
          </div>
          <div class="col">
            <v-input placeholder="Month" />
          </div>
          <div class="col">
            <v-input placeholder="Year" />
          </div>
          <div class="col">
            <v-input placeholder="Age" />
          </div>
        </div>

        <v-check-box>I accept the terms and privacy</v-check-box>
      </v-tab>
      <v-tab name="Social">
        <v-input placeholder="Linkedin" />
        <v-input placeholder="Github" />
      </v-tab>
      <v-tab name="Certificates">
        <v-input placeholder="Instituicion" />
        <v-input placeholder="Graduation" />
        <v-input placeholder="Certificates" />
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import Input from "@/components/atoms/Input.vue";
import CheckBox from "@/components/atoms/CheckBox.vue";
import Tabs from "@/components/molecules/Tab/Tabs.vue";
import Tab from "@/components/molecules/Tab/Tab.vue";

export default {
  name: "tabsFormSingUp",
  components: {
    "v-input": Input,
    "v-check-box": CheckBox,
    "v-tabs": Tabs,
    "v-tab": Tab,
  },
  computed:{
    name:{
      get(){
        return this.$store.state.singUp.name;
      },
      set(value){
        const data = { atribute: 'name', value}
        this.$store.commit('setSingUp', data)
      }
    },
    nickName:{
      get(){
        return this.$store.state.singUp.nickname;
      },
      set(value){
        const data = { atribute: 'nickname', value}
        this.$store.commit('setSingUp', data)
      }
    },
    email:{
      get(){
        return this.$store.state.singUp.email;
      },
      set(value){
        const data = { atribute: 'email', value}
        this.$store.commit('setSingUp', data)
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.input-group {
  display: inline-flex;
}
</style>