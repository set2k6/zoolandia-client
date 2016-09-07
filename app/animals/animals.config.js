'use strict'

angular.module('Zoolandia')
  .config($routeProvider => {
    $routeProvider
      .when('/animals', {
        controller: 'AnimalsCtrl',
        templateUrl: '/app/animals/animals.html'
      })
      .when('/animals/:animalId', {
        controller: 'AnimalDetailCtrl',
        templateUrl: '/app/animals/animalDetail.html'
      })
  })