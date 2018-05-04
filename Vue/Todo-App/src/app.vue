<template>
    <div id="test">
        {{text}}
    </div>

</template>



<script>
    export default{
        name:"App",
        data(){
            return {
                text:"杭州 | 杭城小刘 | iOS && Web"
            }
        }
    }
</script>


<style scoped>
#test{
    color:red;
}

</style>