<template>
  <div class="todo">
    <div class="selector">
      <router-link to="/all">ALL</router-link>
      <router-link to="/active">ACTIVE</router-link>
      <router-link to="/completed">COMPLETED</router-link>
    </div>
    <input type="text" class="todo-input" placeholder="Todo"
           @change="changeKeyword" v-model="inputText" />
    <button @click="addTodo" class="submit-button">SUBMIT</button>
    <router-view :todos="todos"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      todos: [
        { text: 'todo', done: false }
      ]
    }
  },
  methods: {
    changeKeyword(e) {
      this.inputText = e.target.value
    },
    addTodo() {
      if (this.inputText) {
        this.todos.push({
          text: this.inputText, done: false
        })
        this.inputText = ''
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.selector
  margin 10px 0
  text-align center
  a
    display inline-block
    border 1px solid #555
    border-radius 6px
    padding 5px 15px
    color #555
    text-decoration none
    &:hover
      background-color #eaeaea
    &.router-link-active
      border-color #6c5
      color #6c5
.todo-input, .submit-button
  display block
  width 300px
  box-sizing border-box
  font-size 20px
  margin 10px auto
  padding 10px
.todo-input
  border 1px solid #555
.submit-button
  background-color #6af
  border none
  border-radius 6px
  color #fff
  cursor pointer
</style>
