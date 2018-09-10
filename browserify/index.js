angular.module('TodoList', [])
.controller('TodosController', require('./js/todos-controller.js'))
.controller('AddTodoController', require('./js/add-todo-controller.js'))
.controller('TodoController', require('./js/todo-controller.js'));