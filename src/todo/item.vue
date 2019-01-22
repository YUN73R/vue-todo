<template>
	<div :class="['todo-item' , todo.completed ? 'completed' : '']">
		<input type="checkbox" class="toggle" v-model="todo.completed" />
		<div class="todo-content">{{ todo.content }}</div>
		<button class="destory" @click="deleteTodo"><i class="close"></i></button>
	</div>
</template>

<script>
	export default {
		props: {
			todo: {
				type: Object,
				required: true //为真 否则无法传值
			},

		},
		methods: {
			deleteTodo() {
				this.$emit('del', this.todo.id) //向父组件传递一个事件名称
			}
		},

	}
</script>

<style>
	.todo-item {
		width: 100%;
		position: relative;
		line-height: 40px;
		height: 40px;
		background: #FFFFFF;
		color: #42B983;
		margin-top: 10px;
		box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, .4);
		overflow: hidden;
	}

	.todo-content {
		text-align: center;
		overflow: hidden;
		text-indent: 30px;
	}

	.todo-item:last-child {
		border: none !important;
	}

	.destory {
		width: 40px;
		height: 40px;
		position: absolute;
		right: 0;
		top: 0;
		background: rgba(251, 27, 27, .8) !important;
		color: #FFFFFF;
		border: none;
		overflow: hidden;
		outline: none;
	}

	.close {
		position: relative;
		width: 0.3em;
		height: 1.5em;
		background: #FFFFFF;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
		display: inline-block;
	}

	.close:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 0.3em;
		height: 1.5em;
		background: #FFFFFF;
		-webkit-transform: rotate(270deg);
		-moz-transform: rotate(270deg);
		-o-transform: rotate(270deg);
		-ms-transform: rotate(270deg);
		transform: rotate(270deg);
	}

	.toggle {
		width: 20px;
		height: 20px;
		border-radius: 50%;

	}

	input[type="checkbox"] {
		position: absolute;
		top: 8px;
		left: 5px;
		background: #42B983;
		border: none !important;
		color: #FFFFFF;
	}
</style>
