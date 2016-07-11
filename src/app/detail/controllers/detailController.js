angular.module('App.Detail').controller(
  'DetailController', [
    '$uibModal', 
    '$scope',
    'todoItem',
    function ($uibModalInstance, $scope, todoItem) {
      var vm = this;
      vm.title = todoItem.title;
      vm.note = todoItem.note;
  
      vm.ok = function () {
        $uibModalInstance.close();
      };

      vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }
  ]
);