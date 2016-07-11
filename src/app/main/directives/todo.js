angular.module('App.Main')

// ToDo directive definition
.directive('todo', function (){
  return {
    scope: true,
    replace: true,
    template: '<div><h4 class="col-sm-4 col-md-4">{{$index}} - {{todo.title}}</h4><p class="col-sm-6 col-md-6">{{todo.note}}</p><div class="col-sm-2 col-md-2"><button class="btn btn-default" ng-click="main.displayToDo($index)"><span class="glyphicon glyphicon-zoom-in"></span></button><button class="btn btn-default" ng-click="main.removeTodo($index)"><span class="glyphicon glyphicon-remove"></span></button><button class="btn btn-default"><span class="glyphicon glyphicon-edit"></span></button></div></div>'
  }
});
