<template>
    <select 
        class="input mt-5 mb-5"
        :name="name" 
        :id="name"
        @input="onInput"
    >
    <option
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      :disabled="item.disabled"
      :selected="item.selected"
    >
      {{ item.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: "selectItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
    },
    value:{
        type: String,
    },
  },
   methods:{
        onInput(event){
            this.$emit('input', event.target.value)
        }
    },
};
</script>

<style>
</style>