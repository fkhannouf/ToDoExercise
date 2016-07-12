angular.module('App.Main')
// Main view controller
.controller('MainController', function (ToDoModel, $uibModal, $routeParams, $scope, $location) {
  var vm = this,
      // Read items from model service...
      currentTodosCollection = ToDoModel.allTodos();
  
      // ...and set each item Id
      vm.todoCollection = currentTodosCollection;
  
      //debugger;  
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
      keyboard: false,  // TODO : find why the modal doesn't want to reopen after an ESC key touch
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
      keyboard: false,  // TODO : find why the modal doesn't want to reopen after an ESC key touch
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
  
  
  // TODO : verify if there's a better way to do that by using routing
  
  // Check if an :id parameter is passed via the URL...
  $scope.init = function () {
    // ... and invoke the appropriate modal view
    if (angular.isUndefined($routeParams.id)) return;
    if ($location.path().endsWith('/edit')) {
      vm.editToDo($routeParams.id);
    } else {
      vm.displayToDo($routeParams.id);
    }
  };
  
});

