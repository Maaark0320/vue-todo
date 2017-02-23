<template>
  <div class="todo-list">
    <ul>
      <li v-for="(todo, index) in filteredTodos" @click="toggleTodo(index)">
        <span class="checkbox" :class="{'checked': todo.done}"></span>
        <span :class="{'checked': todo.done}">{{todo.text}}</span>
        <span @click="deleteTodo(index)" class="del">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
const filters = {
  all: (todos) => { return todos },
  active: (todos) => { return todos.filter(todo => todo.done === false)},
  completed: (todos) => { return todos.filter(todo => todo.done === true)}
}

export default {
  props: {
    todos: Array,
    path: String
  },
  computed: {
    filteredTodos() {
      const visibility = this.path && this.path.match(/all|active|completed/) || 'all'
      return filters[visibility](this.todos)
    }
  },
  methods: {
    toggleTodo(index) {
      const todo = this.todos[index]
      if (typeof(todo) === 'object' && todo !== {}) {
        todo.done = !todo.done
      }
    },
    deleteTodo(index) {
      if (this.todos[index]) {
        this.todos.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.todo-list
  width 100%
  max-width 600px
  margin 0 auto
ul
  padding 0 5px
li
  position relative
  font-size 18px
  padding 8px 45px
  margin 5px 0
  list-style none
  cursor pointer
  transition .2s
  &:hover
    background-color #eaeaea
.checkbox
  position absolute
  top 8px
  left 8px
  width 25px
  height 25px
  border-radius 100%
  border 1px solid #555
  &.checked:after
    content ''
    position absolute
    top 40%
    left 8px
    display block
    margin-top -8px
    width 7px
    height 16px
    border-right 2px solid #6c5
    border-bottom 2px solid #6c5
    transform rotate(36deg)
.checked
  text-decoration line-through
  color #888
.del
  position absolute
  right 8px
  width 25px
  line-height 25px
  text-align center
  float right
  background-color #e65
  color #fff
  border-radius 100%
  z-index 99
  transition .3s
  &:hover
    background-color darken(#e65, 20%)
    transform rotate(180deg)
</style>
