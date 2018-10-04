<template>
  <div>
    <Header></Header>
    <p>“关于我”模块</p>
    <span>我的履历</span>
    <button @click="loadExperience()">想知道吗？</button>
    <ul>
      <li v-for="(experience,key) in experiences" v-bind:key="key">{{experience}}</li>
    </ul>
  </div>
</template>

<script>
import Header from '@/components/Header'
// import Axios from 'Axios'
export default {
  data () {
    return {
      experiences: [
        '95后',
        '技术爱好者（iOS+Web+AR+ML+Swift+JS）',
        '乒乓球爱好者',
        '运动',
        '电影',
        '美食',
        '音乐'
      ]
    }
  },
  components: {
    Header
  },
  methods: {
    loadExperience () {
      //
      let api = 'https://api.douban.com/v2/book/search?q=python&fields=id,title'
      this.$http.jsonp(api).then(response => {
        this.experiences = response.body.books
      }, response => {
        console.log(response)
      })
      /*
     Axios.get(api).then(response => {
       this.experiences = response.body.books
     }).catch(error =>{
       console.log(error)
     })
     */
    }
  },
  mounted () {
    this.loadExperience()
  }

}
</script>

<style>
button{
  border: 1px solid #bbbbbb;
}
</style>
