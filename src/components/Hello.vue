<template>
  <div class="hello">
    <h2>{{message}}</h2>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
export default {
  props: {
    str: String
  },
  computed: {
    message() {
      return 'Hello ' + (this.str || 'World') + '!!'
    }
  }
}
</script>

<style scoped lang="stylus">
.hello
  text-align center
</style>
