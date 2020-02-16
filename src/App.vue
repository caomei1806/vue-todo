<template>
	<div id="app">
		<div class="container my-4">
			<h1>TODOs</h1>
			<todo-list></todo-list>
		</div>
	</div>
</template>

<script>
import  TodoList from './components/Todo-list.vue';

export default {
	name: "App",
	components: {
		TodoList
	}
};
</script>

<style lang="scss">
</style>
