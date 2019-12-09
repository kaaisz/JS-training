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
			addItem: function(e) {
				e.preventDefault();
				this.todos.push(this.newItem);
			}
		}
	});
})();