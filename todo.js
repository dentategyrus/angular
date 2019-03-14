

angular.module('todoApp', [])
.controller('TodoListController', function() {
  var todoList = this;
  todoList.todos = [
    {text:'learn AngularJS', done:true},
    {text:'build an AngularJS app', done:false}];

  todoList.addTodo = function() {
    todoList.todos.push({text:todoList.todoText, done:false});
    todoList.todoText = '';
  };

  todoList.remaining = function() {
    var count = 0;
    angular.forEach(todoList.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.archive = function() {
    var oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) todoList.todos.push(todo);
    });
  };
});

//ngRepeat//
angular.module('ngRepeat', ['ngAnimate']).controller('repeatController', function($scope) {
  var friends = [
    {name:'John', age:25},
    {name:'Mary', age:40},
    {name:'Peter', age:85}
  ];

  $scope.removeFirst = function() {
    $scope.friends.shift();
  };

  $scope.updateAge = function() {
    $scope.friends.forEach(function(el) {
      el.age = el.age + 5;
    });
  };

  $scope.copy = function() {
    $scope.friends = angular.copy($scope.friends);
  };

  $scope.reset = function() {
    $scope.friends = angular.copy(friends);
  };

  $scope.reset();
});