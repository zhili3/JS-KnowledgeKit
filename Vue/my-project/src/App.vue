<!--
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>
-->
<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input type="text" placeholder="请输入..." v-model="newItem" v-on:keyup.enter="addNewItem" />
    <ul>
  
      <li v-for="todo in items" v-bind:class="{finished:todo.isFinished}" v-on:click="toggleFinished(todo)" >{{todo.label}}</li>

    </ul>
    <p>child tell me : {{childWords}}</p>
    <componentA msgFromFather="I am a message from father." v-on:child-tell-me-something="listenToMyBoy" ></ComponentA>
  </div>
</template>

<script>
/*
  export default{} 也是 ES6 的写法，
  等价于 modules.export;

import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
*/
import Store from './Store.js'
import ComponentA from './components/componentA'

export default{
  data:function(){
    return {
      title:"this is a todo list",
      items:Store.fetch(),
      newItem:"",
      childWords:""
    }
  },
  methods:{
    toggleFinished:function(todo){
     todo.isFinished = !todo.isFinished;
    },
    addNewItem:function(){
      console.log(this.newItem);
      this.items.push({label:this.newItem,isFinished:false});
      this.newItem = ""
    },
    listenToMyBoy(msg){
      this.childWords = msg;
      console.log(msg);
    }
  },
  watch:{
    "items":{
          handler:function(newVal,oldVal){
                Store.save(newVal);
                console.log("newVal->" + newVal + " oldVal-> "+ oldVal);
              },
              //deep 可以深度观察值的变化
          deep:true
        }
    },
    components:{ComponentA}

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.finished{
  text-decoration:underline;
  color:red;
}

input{
  border:1px solid lightgray;
}
</style>
