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
  vm.removeToDo = function (todoIndex) {
    vm.todoCollection.splice(todoIndex, 1);
  };
  
  // Display details in a modal view
  vm.displayToDo = function (todoIndex) {
    $uibModal.open({
      animation: true,
      templateUrl: 'app/detail/templateDisplay.html',
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
  
  // Edit details in a modal view
  vm.editToDo = function (todoIndex) {
    $uibModal.open({
      animation: true,
      templateUrl: 'app/detail/templateEdit.html',
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

