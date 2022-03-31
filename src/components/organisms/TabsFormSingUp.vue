<template>
  <div>
    <v-tabs route>
      <v-tab name="Personal">
         <router-view />
      </v-tab>
      <v-tab name="Social">
        <router-view />
      </v-tab>
      <v-tab name="Certificates">
        <router-view />
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
 
import Tabs from "@/components/molecules/Tab/Tabs.vue";
import Tab from "@/components/molecules/Tab/Tab.vue";

export default {
  name: "tabsFormSingUp",
  components: {
    "v-tabs": Tabs,
    "v-tab": Tab,
  },

};
</script>

<style lang="scss" scoped>
.input-group {
  display: inline-flex;
}
</style>