<template>
  <div>
    <header>
      <h1>Vue ToDo</h1>
    </header>

    <router-view></router-view>

    <footer>
      Copyright <a href="https://maaarklog.com">Maaark</a>, All Rights Reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
body
  margin 0
  padding 0
a
  color #6af
header, footer
  background-color #555
  color #fff
  padding 10px 0
  text-align center
  h1
    margin 0
    font-size 30px
  a
    color #fff
</style>
