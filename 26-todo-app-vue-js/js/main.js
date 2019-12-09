(function() {
	'use strict';

	// Vue.js can do 2-way data binding
	// create new view model
	var vm = new Vue({
		el: '#app',
		data: {
			newItem: '',
			todos: [
				'🥕 2 Carrots',
				'🥚 6 packed egg',
				'🥦 1 Broccolis'
			]
		},
		methods: {
			addItem: function() {
				this.todos.push(this.newItem);
				// reset state
				this.newItem = '';
			},
			deleteItem: function(i) {
				if(confirm('are you sure?')) {
					// get rid of 1 item which specified as i
					this.todos.splice(i, 1);
				}
			}
		}
	});
})();