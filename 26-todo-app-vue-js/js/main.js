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
				this.todos = this.todos.filter(function(todo) {
					return !todo.isDone;
				});
			}
		},
		computed: {
			remaining: function() {
				var items = this.todos.filter(function(todo) {
					return !todo.isDone;
				});
				return items.length;
			}
		}
	});
})();