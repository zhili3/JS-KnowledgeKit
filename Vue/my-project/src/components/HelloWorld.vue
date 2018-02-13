<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{name}}</h2>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  /*
    ES6 的写法
    data (){
      return {
        msg:"welcome"
      }
    }

    等价于
    function data(){
      return {
        msg: "welcome"
      }
    }


  */
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:"@杭城小刘",
      age:22
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
