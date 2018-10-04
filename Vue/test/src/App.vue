<template>
  <div id="app">
    <img src="./assets/logo.png"><h1>个人博客</h1>
    <router-link to="/Home">首页</router-link>
    <router-link to="/About">关于</router-link>
    <router-link to="/News">新闻</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
img{
  width: 30px;
  display: inline-block;
  margin: 20px;
  vertical-align: middle;
}
h1{
  height: 30px;
  line-height: 30px;
  display: inline-block;
}
</style>
