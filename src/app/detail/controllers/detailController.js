angular.module('App.Detail').controller(
  'DetailController',
    function ($uibModalInstance, todoItem, $location) {
      var vm = this;
      vm.title = todoItem.title;
      vm.note = todoItem.note;
  
      vm.okAction = function () {
        $uibModalInstance.close();
      };

      vm.cancelAction = function () {
        $uibModalInstance.dismiss('cancel');
        $location.path('/')
      };
      
      vm.saveAction = function () {
        todoItem.title = vm.title;
        todoItem.note = vm.note;
        $uibModalInstance.close();
        $location.path('/')
      };
      
    }
);
