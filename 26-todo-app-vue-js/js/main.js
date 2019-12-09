(function() {
	'use strict';

	// Vue.js can do 2-way data binding
	// create new view model
	var vm = new Vue({
		el: '#app',
		data: {
			newItem: '',
			todos: [
				{
					title: '🥕 2 Carrots',
					isDone: false,
				},
				{
					title: '🥚 6 packed egg',
					isDone: false,
				},
				{
					title: '🥦 1 Broccolis',
					isDone: true
				}
			]
			// todos: [],
		},
		watch: {
			todos: {
				// enable deep watcher to watch state
				handler: function() {
					localStorage.setItem('todos', JSON.stringify(this.todos));
					// you can watch localstorage files in developer tools local storage
				},
				deep: true
			}
		},
		mounted: function() {
			// fetch json data from local storage with JSON.parse
			this.todos = JSON.parse(localStorage.getItem('todos')) || [];
		},
		methods: {
			addItem: function() {
				// define item as objects
				var item = {
					title: this.newItem,
					isDone: false
				}
				this.todos.push(item);
				// reset state
				this.newItem = '';
			},
			deleteItem: function(i) {
				if(confirm('are you sure?')) {
					// get rid of 1 item which specified as i
					this.todos.splice(i, 1);
				}
			},
			purge: function() {
				// if confirm is not proceeded, nothing is gonna change
				if(!confirm('Do you want to delete all finishing task?')) {
					return;
				}
				// Delete everything
				// assign todos which haven't finished
				this.todos = this.remaining;
			}
		},
		computed: {
			remaining: function() {
				// var items = this.todos.filter(function(todo) {
				// 	return !todo.isDone;
				// });
				// return items.length;

				// return above as a function
				return this.todos.filter(function(todo) {
					return !todo.isDone;
				});
			}
		}
	});
})();