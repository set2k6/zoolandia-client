'use strict'

angular.module('Zoolandia')
  .config($routeProvider => {
    $routeProvider
      .when('/habitats', {
        controller: 'HabitatsCtrl',
        templateUrl: '/app/habitats/habitats.html'
      })
      .when('/habitats/:habitatId', {
        controller: 'HabitatDetailCtrl',
        templateUrl: '/app/habitats/habitatDetail.html'
      })
  })