<template>
  <div class="card"> <slot></slot> </div>
</template>

<script>
export default {
    name:'cardItem'

}
</script>

<style>
.card{
    padding: 50px;
    background: #FFFFFF;
    border-radius: 20px;
}

</style>