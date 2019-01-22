import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/todo/todo'
Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			component: Todo
		}
  ]
})
