<template>
  <div>
    <Header></Header>
    <button @click="backNews()">返回</button>
    <p>“新闻详情”模块</p>
    <h1>{{detail.title}}</h1>
    <p v-html="detail.content"></p>
  </div>
</template>

<script>
// import Axios from 'Axios'
export default {
  data () {
    return {
      detail: ''
    }
  },
  methods: {
    fetchNewsDetail (aid) {
      let api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + aid
      this.$http.jsonp(api).then(response => {
        this.detail = response.body.result[0]
      }, response => {
        console.log('error->' + response)
      })
    },
    backNews () {
      this.$router.push({path: '../news'})
    }
  },
  mounted () {
    this.$nextTick(function () {
      console.log(this.$route.params)
      this.fetchNewsDetail(this.$route.params.newid)
    })
  }
}
</script>

<style>

</style>
