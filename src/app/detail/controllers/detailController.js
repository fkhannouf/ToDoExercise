angular.module('App.Detail').controller(
  'DetailController',
    function ($uibModalInstance, todoItem, $location) {
      var vm = this;
      vm.title = todoItem.title;
      vm.note = todoItem.note;

  
      $uibModalInstance.closed.then(function (a) {
        $location.path('/');
      });
  
  
      vm.okAction = function () {
        $uibModalInstance.close();
      };

      vm.cancelAction = function () {
        $uibModalInstance.dismiss('cancel');
      };
      
      vm.saveAction = function () {
        todoItem.title = vm.title;
        todoItem.note = vm.note;
        $uibModalInstance.close();
      };
      
    }
);
