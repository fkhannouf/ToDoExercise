angular.module('App.Main')
// Main view controller
.controller('MainController', function (ToDoModel, $uibModal) {
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
  
  // Display details
  vm.displayToDo = function (todoIndex) {
    $uibModal.open({
      animation: true,
      templateUrl: 'app/detail/template.html',
      controller: 'DetailController',
      controllerAs: 'detailController',
      size: 'lg',
      resolve: {
        todoItem: function () {
          return vm.todoCollection[todoIndex];
        }
      }
    });
  };
});

