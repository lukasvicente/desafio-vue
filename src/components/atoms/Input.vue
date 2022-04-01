<template>
  <div>
    <input   
      class="input mt-5 mb-5"
      :class="[{ error: error }]"
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
      :required="required"
    />
    <p v-if="error">
      <span class="messageError"> {{ messageError }} </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "inputType",
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
    messageError: {
      type: String,
      default: null,
    },
    value: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    msgError() {
      return this.$store.state.singUp.errorInput;
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
  watch: {
    value(newValue) {
      this.$props.error = false;
      this.$props.messageError = "";
      if (!newValue && this.required) {
        this.$props.error = true;
        this.$props.messageError = "Campo obrigatório";
      }
    },
    msgError(newValue) {
      if (this.$props.name === newValue.name) {
        this.$props.error = true;
        this.$props.messageError = newValue.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.error {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.messageError {
  color: #dc3545;
  font-size: 11px;
}
</style>