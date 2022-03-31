<template>
  <div v-show="isActive"><slot></slot></div>
</template>

<script>
export default {
  name: "tabItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
      nameComponente: "",
    };
  },
  created() {
    this.nameComponente = this.$route.name;
  },
  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    },
  },
  methods:{
    isActiveComponente(){
      return  this.isActive =
      this.nameComponente === this.name.toLowerCase() ? true : false;
    }
  },
  mounted() {
    this.isActiveComponente();
    //this.isActive = this.selected;
  },
watch: {
  $route(to) {
    this.nameComponente = to.name;
    this.isActiveComponente();
   
  },
},
};
</script>

<style>
</style>