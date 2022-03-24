<template>
  <input 
    class="input mt-5 mb-5"
    :type="type" 
    :name="name" 
    :id="id"
    :placeholder="placeholder"
    :value="value"
    @input="onInput"
    >
</template>

<script>
export default {
    name:'inputType',
    props:{
        type:{
            type:String,
            default: 'text'
        },
        name:{
            type:String,
            default: ''
        },
        id:{
            type:String,
            default: 'text'
        },
        placeholder:{
            type: String,
            default: ''
        },
        value:{
            type: String,
            
        }
    },
    methods:{
        onInput(event){
            this.$emit('input', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.input{
    width: 100%;
    background: #FFFFFF;
    border: 0.8px solid #DDDDDD;
    border-radius: 4px;
    padding: 16.5px 14px;
}
 

</style>