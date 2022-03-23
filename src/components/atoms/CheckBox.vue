<template>
  <div class="mt-5 mb-5 form-check">
    <input class="input" type="checkbox" style="background-color='red'}" name="" id="">
    <label for="a" class="form-check-label"> <slot></slot> </label>
  </div>
</template>

<script>
export default {
    name:'checkBox'
}
</script>

<style>
.form-check {
    position: relative;
    display: block;
    
}
.form-check .input{
    width: 15px;
    height: 15px;
    cursor: pointer;
}
 
label {
    display: inline-block;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
}
 
</style>