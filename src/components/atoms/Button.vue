<template>
    <button class="button" :class="{'disabled':disabled}" :disabled="disabled" @click="$emit('click')"> <slot></slot> </button>
</template>

<script>
export default {
    name:'buttonType',
    props:{
        disabled:{
            type: Boolean,
            default: false
        }
    }
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
.disabled{ 
    cursor: not-allowed;
    background-color: rgba(239, 239, 239, 0.925) ;
    color: rgba(16, 16, 16, 0.3);
    border-color: rgba(118, 118, 118, 0.3);
}
</style>