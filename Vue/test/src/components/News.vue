<template>
  <div>
    <Header></Header>
    <Test></Test>
    <p>“新闻”模块</p>
    <button @click="fetchNews()">想知道吗？</button>
    <button @click="newDetail()">新闻详情</button>
    <ul v-cloak>
      <li v-for="(item,key) in news" v-bind:key="key">
        <router-link :to="'/newscontent/'+item.aid">{{item.title}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
// import Axios from 'Axios'
import Header from '@/components/Header'
import Test from '@/components/Test'

export default {
  data () {
    return {
      news: []
    }
  },
  components: {
    Header,
    Test
  },
  methods: {
    fetchNews () {
      let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
      this.$http.jsonp(api).then(response => {
        console.log(response)
        this.news = response.body.result
      }, response => {
        console.log('error->' + response)
      })
    },
    newDetail () {
      this.$router.push({name: 'NewsContent', params: {newid: 499}})
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.fetchNews()
    })
  }
}
</script>

<style>

</style>
