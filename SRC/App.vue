<template>
	<div id="app">
		<Header />
		<router-view />
	</div>
</template>

<script>
	
	import Header from './todo/header'
	export default {
		name: 'App',
		components:{
			Header
			}
	}
</script>

<style>
	 @import url("style/globaal.css");
</style>
