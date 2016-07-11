angular.module('App.Main')
// Main view controller
.controller('MainController', function (ToDoModel) {
  var vm = this,
      // Read items from model service...
      currentTodosCollection = ToDoModel.allTodos();
  
      // ...and set each item Id
      vm.todoCollection = currentTodosCollection;
  
  // Add stuff action
  vm.addStuffToDoAction = function (){
    var aTodo = ToDoModel.createStuff(
      "Stuff", "Once again, something to do..."
    );
    
    currentTodosCollection.push(aTodo);
    
    vm.todoCollection = currentTodosCollection;
  };
  
  // Remove todo action
  vm.removeTodo = function (todoIndex) {
    vm.todoCollection.splice(todoIndex, 1);
  };
});

