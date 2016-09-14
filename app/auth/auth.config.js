'use strict'

angular.module('Zoolandia')
  .config($routeProvider => {
    $routeProvider
      .when('/login', {
        controller: 'LoginController',
        templateUrl: '/app/auth/login.html'
      });
  })