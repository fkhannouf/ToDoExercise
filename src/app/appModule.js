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
    .when('/', {
      templateUrl: 'app/main/template.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/'
    });
});

