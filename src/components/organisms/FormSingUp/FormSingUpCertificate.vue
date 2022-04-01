<template>
  <div>
    <div v-for="(item, index) in certificate" :key="index">
      <v-input
        placeholder="Instituicion"
        :name="certificate[index]['instituicion']"
        v-model="certificate[index].instituicion"
      />
      <v-input
        placeholder="Graduation"
        :name="certificate[index]['graduation']"
        v-model="certificate[index].graduation"
      />
       
        <v-input
          placeholder="Certificates"
          :name="certificate[index]['name']"
          v-model="certificate[index].name"
        />
       
    </div>
    <div class="btnIcon" @click="addInput"><i class="fa-solid fa-plus"></i></div>
  </div>
</template>

<script>
import Input from "@/components/atoms/Input.vue";
export default {
  name: "formSingUpCertificate",
  components: {
    "v-input": Input,
  },
  methods: {
    addInput() {
      const data = {
        instituicion: null,
        graduation: null,
        name: null,
      };
      this.certificate.push(data);
    },
  },
  computed:{
    certificate(){
      return this.$store.state.singUp.certificate;
    },
  }
};
</script>

<style lang="scss" scoped>
 .btnIcon{
    position: relative;
    display: flex;
    float: right;
    margin-top: -38px;
    margin-right: 20px;
   cursor: pointer;
   color: #c5c4c4;
 }
  
</style>