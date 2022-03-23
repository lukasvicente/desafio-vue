<template>
  <p class="title" > <slot></slot> </p>
</template>

<script>
export default {
    name:'typographyText'
}
</script>

<style lang="scss" scoped >
 .title{
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -1.5px;
 }
</style>