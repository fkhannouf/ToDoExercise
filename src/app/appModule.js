angular.module('toDoExercise', [
  'ngAnimate', 
  'ngTouch', 
  'ngMessages', 
  'ngRoute', 
  'ui.bootstrap',
  'App.Main',
  'App.Detail'
])

// Routing setup     
.config(function ($routeProvider) {
  $routeProvider
    .when('/todo/:id?', {
      templateUrl: 'app/main/template.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/todo/:id/edit', {
      templateUrl: 'app/main/template.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});

