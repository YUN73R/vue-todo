<template>
	<div class="helper">
		<p class="lefe"> {{ todoLenth }}个任务未完成</p>
		<p class="tabs">
			<span v-for="state in states"
			 :key="state" 
			 :class="[state, filter === state ? 'actived' : '']"
			 @click="toggleFilter(state)"
			 >{{ state }}</span>
		</p>
		<p class="clear" @click="clearAllCompleted">删除已完成</p>
	</div>
</template>

<script>
	export default{
		props: {
			filter: {
				type: String,
				required: true
			},
			todos:{
				type: Array,
				required: true
				}
		},
		data() {
			return {
				states: ['all', 'active', 'completed']
			}
		},
		methods: {
			toggleFilter(state) {
				this.$emit('toggle', state)
			},
			clearAllCompleted(){
				this.$emit('clearAllCompleted')
			}
		},
		computed: {
			todoLenth() {
				return this.todos.filter(todo => !todo.completed).length
			}
		}
	}
</script>

<style>
	.helper{
		width: 100%;
		line-height: 50px;
		display: flex;
	}
	.helper p{
		flex: 0 1 30%;
		
	}
	.tabs{
		display: flex;
		flex: 0 1 40% !important;
		height: 50px;
	}
	.tabs span{
		flex: 1;
		width: 100%;
		height: 40px;
		display: block;
		text-align: center;
		margin: 2px;
		line-height: 40px;
		cursor: pointer;
	}

	.actived{
		border-radius: 5px;
		background: #42B983;
		color: #FFFFFF;
	}
	.clear{
		text-align: end;
		cursor: pointer;
		color: red;
	}
</style>
