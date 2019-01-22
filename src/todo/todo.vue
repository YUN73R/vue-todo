<template>
	<div class="todo">
		<input type="text"
			class="add-input"
			autofocus="autofocus"
			placeholder="接下来做什么？"
			@keyup.enter="addTodo"
		/>
		<Tabs 
		:filter="filter"
		:todos="todos"
		@toggle="toggleFilter"
		@clearAllCompleted="clearAllCompleted"
		 />
		<div class="items">
			<Item :todo="todo" 
			v-for="todo in filteredTodos"
			:key="todo.id"
			@del='deleteTodo'
			/>
		</div>
		<p @click="increment">{{count}}</p>
	</div>
</template>

<script>
	import Item from './item'
	import Tabs from './tabs'
	let id = 0
	export default{
		name: 'todo',
		components: {
			Item,
			Tabs
		},
		data() {
			return {
				todos: [],
				filter: 'all',
				count: 0
			}
		},
		computed: {
			filteredTodos() {
				if(this.filter === 'all'){
					return this.todos
				}
				const completed = this.filter === 'completed'
				return this.todos.filter(todo => completed === todo.completed)
			}
		}, 
		methods: {
			increment () {
      this.count++
    },
			addTodo(e) {
				this.todos.unshift({
					id: id++,
					content: e.target.value.trim(),
					completed: false
				})
				e.target.value = '';
			},
			deleteTodo(id){
				this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
			},
			toggleFilter(state){
				this.filter = state
			},
			clearAllCompleted(){
				this.todos = this.todos.filter(todo => !todo.completed)
			}
		},
	}
</script>

<style scoped>
	.todo{
		width: 80%;
		margin: 100px auto;
		background: #FFFFFF;
		box-shadow: -1px 4px 13px 1px #dcdcdc;
		padding: 20px;
	}
	.add-input{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-indent: 20px;
	}
	.items{
		margin-top: 20px;
		background: #FFFFFF;
	}
</style>
