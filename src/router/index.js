import Vue from 'vue'
import Router from 'vue-router'
import Todo from 'components/Todo'
import TodoList from 'components/TodoList'
import Hello from 'components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Todo,
      children: [
        {
          path: 'all',
          component: TodoList
        },
        {
          path: 'active',
          component: TodoList,
          props: { path: 'active' }
        },
        {
          path: 'completed',
          component: TodoList,
          props: { path: 'completed' }
        }
      ]
    },
    {
      path: '/hello',
      component: Hello,
      props: { str: 'Vue' }
    }
  ]
})
