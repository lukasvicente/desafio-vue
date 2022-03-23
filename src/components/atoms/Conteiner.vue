<template>
    <div class="conteiner" :class="maxWidth">
         
        <slot></slot>
 
    </div>
</template>

<script>
export default {
    name:'conteinerItem',
    props:{
        maxWidth: {
            type: String,
            default: 'lg'
        }
    }

}
</script>

<style lang="scss" scoped>
.conteiner{
    
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    margin: auto;
    padding: 24px;
    width: 100%;
    
}
.md{
    max-width: 100vh;
}
.lg{
    max-width: 200vh;
}
.xs{
    max-width: 150vh;
}
.xl{
    max-width: 50vh;
}
</style>