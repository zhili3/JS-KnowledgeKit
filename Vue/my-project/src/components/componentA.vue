<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{msgFromFather}}</h2>
    <button v-on:click="onClickMe">Say something to father!</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:"Hello from component a!"
    }
  },
  /*
  父亲与子组件通信:
  1、在父组件里面写上属性（App.vue: <componentA msgFromFather="I am a message from father." v-on:child-tell-me-something="listenToMyBoy" ></ComponentA>）
  2、在子组件里面必须注册props
  */
  props:["msgFromFather"],
  

  methods:{
    onClickMe(){
      /*
      子组件向父组件通信：
      1、子组件触发事件并且传递信息-this.$emit("child-tell-me-something",this.msg);
      2、父组件监控。<componentA msgFromFather="I am a message from father." v-on:child-tell-me-something="listenToMyBoy" ></ComponentA>
      listenToMyBoy(msg){
        //...
      }
      */

      this.$emit("child-tell-me-something",this.msg);
    }
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color:brown;
}
button{
  height:35px;
  width:80%;
  border:1px solid lightgray;
}

</style>
