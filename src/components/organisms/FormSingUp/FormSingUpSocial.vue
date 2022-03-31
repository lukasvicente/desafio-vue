<template>
  <div>
    <v-input
      placeholder="Linkedin"
      name="linkedin"
      v-model="linkedin"
      required
    />
    <v-input 
      placeholder="Github" 
      name="github" 
      v-model="github" 
      required
    />
  </div>
</template>

<script>
import Input from "@/components/atoms/Input.vue";
export default {
  name: "formSingUpSocial",
  components: {
    "v-input": Input,
  },
  computed: {
    linkedin: {
      get() {
        return this.$store.state.singUp.linkedin;
      },
      set(value) {
        const data = { atribute: "linkedin", value };
        this.$store.commit("setSingUp", data);
      },
    },
    github: {
      get() {
        return this.$store.state.singUp.github;
      },
      set(value) {
        const data = { atribute: "github", value };
        this.$store.commit("setSingUp", data);
      },
    },
  },
};
</script>

<style>
</style>