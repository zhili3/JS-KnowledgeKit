<template>
  <li @click='handleDelete'>序号：{{index}}，项目：{{itemname}}</li>
</template>

<script>
export default {
  props: ['index', 'itemname', 'state'],
  methods: {
    handleDelete () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
