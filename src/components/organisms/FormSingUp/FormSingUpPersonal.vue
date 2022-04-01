<template>
  <div>
    <v-input placeholder="Full Name" name="name" v-model="name" required />
    <v-input
      placeholder="Nickname"
      name="nickName"
      v-model="nickName"
      required
    />
    <div class="row">
      <div class="col">
        <v-input
          
          placeholder="Email"
          name="email"
          type="email"
          v-model="email"
          required
        
        />
      </div>
      <div class="col">

       <v-input    
         
        placeholder="Phone"
        name="phone"
        v-model="phone"
        required
      />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <v-select name="day" :options="optionsDay" v-model="day" /> 
      </div>
      <div class="col">
        <v-select name="month" :options="optionsMonth" v-model="month" />
      </div>
      <div class="col">
        <v-select name="year" :options="optionsYear" v-model="year" />
      </div>
      <div class="col">
        <v-input
          placeholder="Age"
          name="age"
          type="number"
          v-model="age"
          required
        />
      </div>
    </div>
    
    <v-check-box   v-model="acceptTerms" >I accept the terms and privacy</v-check-box> 
  </div>
</template>

<script>
import Input from "@/components/atoms/Input.vue";
import CheckBox from "@/components/atoms/CheckBox.vue";
import Select from "@/components/atoms/Select.vue";
import { formatMonth } from '@/utils/format';
export default {
  name: "formSingUpProfile",
  components: {
    "v-input": Input,
    "v-check-box": CheckBox,
    "v-select": Select
  },
  data(){
    return {
      check: false,
      options:[
        {text: 'Day', value: ''},
        {text: '1', value: '1'},
        {text: '2', value: '2'},
        {text: '3', value: '3'},
      ]
    }
  },
  computed: {

    optionsDay(){
      const data = [{text: 'Day', value: ''}] 
      for (let day = 1; day <= 31; day++ ){
        const valueData = {
          text: day,
          value: day
        }
        data.push(valueData)
      }
      return data;
    },

    optionsMonth(){
      const data = [{text: 'Month', value: ''}] 
      for (let month = 1; month <= 12; month++ ){
        const valueData = {
          text: formatMonth(month),
          value: month
        }
        data.push(valueData)
      }
      return data;
    },

    optionsYear(){
      const data = [] 
      data.unshift({text: 'Year', value: ''})
      for (let year = 2022; year >= 1900; year-- ){
        const valueData = {
          text: year,
          value: year
        }
        data.push(valueData)
      }
      return data;
    },

    name: {
      get() {
        return this.$store.state.singUp.name;
      },
      set(value) {
        const data = { atribute: "name", value };
        this.$store.commit("setSingUp", data);
      },
    },
    nickName: {
      get() {
        return this.$store.state.singUp.nickName;
      },
      set(value) {
        const data = { atribute: "nickName", value };
        this.$store.commit("setSingUp", data);
      },
    },
    email: {
      get() {
        return this.$store.state.singUp.email;
      },
      set(value) {
        const data = { atribute: "email", value };
        this.$store.commit("setSingUp", data);
      },
    },

    phone: {
      get() {
        return this.$store.state.singUp.phone;
      },
      set(value) {
        const data = { atribute: "phone", value };
        this.$store.commit("setSingUp", data);
      },
    },

    age: {
      get() {
        return this.$store.state.singUp.age;
      },
      set(value) {
        const data = { atribute: "age", value };
        this.$store.commit("setSingUp", data);
      },
    },

    day: {
      get() {
        return this.$store.state.singUp.day;
      },
      set(value) {
        const data = { atribute: "day", value };
        this.$store.commit("setSingUp", data);
      },
    },

    month: {
      get() {
        return this.$store.state.singUp.month;
      },
      set(value) {
        const data = { atribute: "month", value };
        this.$store.commit("setSingUp", data);
      },
    },

    year: {
      get() {
        return this.$store.state.singUp.year;
      },
      set(value) {
        const data = { atribute: "year", value };
        this.$store.commit("setSingUp", data);
      },
    },

    acceptTerms: {
      get() {
        return this.$store.state.singUp.acceptTerms;
      },
      set(value) {
        const data = { atribute: "acceptTerms", value };
        this.$store.commit("setSingUp", data);
      },
    },

  },
};
</script>

<style lang="scss" scoped>
 
</style>