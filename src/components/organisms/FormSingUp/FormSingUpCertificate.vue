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

    <hr />
    <br />
    {{ certificate }}
    <hr />
    <button @click="addInput">ADD</button>
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

<style>
</style>