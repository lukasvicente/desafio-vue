<template>
    <button class="button" @click="$emit('click')"> <slot></slot> </button>
</template>

<script>
export default {
    name:'buttonType'
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/index.scss';

.button{
    background-color: $colorPrimary;
    color: $colorTertiary;
    width: 80px;
    height: 44px;
    border-radius: 4px;
    cursor: pointer;
}
</style>