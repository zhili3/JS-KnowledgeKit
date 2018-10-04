<template>
  <div>
    <Header></Header>
    <h1>“首页”模块</h1>
    <h3>接下来的内容会原样输出</h3>
    <h2>我叫{{name}}，我今年{{age}}了，我喜欢</h2>
    <ul><li v-for="(hobby, key) in hobbys" v-bind:key='key'> {{hobby}}</li></ul>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {

  data () {
    return {
      name: '杭城小刘',
      age: 23,
      hobbys: ['iOS', 'Web', 'AR', 'ML']
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped>
li{
  color:cadetblue;
  font-size: 17px;
  font-family: 微软雅黑;
}
</style>
