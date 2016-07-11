/**
 * App.Main Module
 *
 * Description
 */

angular.module('App.Main', [])
// Main view controller
.controller('MainController', function (ToDoModel) {
  var vm = this;
  vm.allTodos = ToDoModel.allTodos();
  
  // Add stuff action
  vm.addStuffToDoAction = function (){
    ToDoModel.createStuff("Stuff", "Well, something to do...");
  }
})

// ToDo directive definition
.directive('todo', function (){
  return {
    scope: true,
    replace: true,
    template: '<div><h4>{{todo.title}}</h4><p>{{todo.note}}</p></div>'
  }
});
