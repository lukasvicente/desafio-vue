<template>
  <div>
    <v-input placeholder="Nickname" />
    <v-input placeholder="Email" type="email" />
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
    <v-tabs>
      <v-tab name="Person">
        <v-input placeholder="Full Name" />
      </v-tab>
      <v-tab name="teste">
       <h1>test</h1>
      </v-tab>
    </v-tabs>
    <v-check-box>I accept the terms and privacy</v-check-box>
  </div>
</template>

<script>
import Input from "@/components/atoms/Input.vue";
import CheckBox from '@/components/atoms/CheckBox.vue';
import Tabs from '@/components/molecules/Tab/Tabs.vue';
import Tab from '@/components/molecules/Tab/Tab.vue';

export default {
  name: "tabsFormSingUp",
  components: {
    'v-input': Input,
    'v-check-box':CheckBox,
    'v-tabs':Tabs,
    'v-tab': Tab

  },
};
</script>

<style lang="scss" scoped>
.input-group {
  display: inline-flex;
}
</style>