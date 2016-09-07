'use strict'

angular.module("Zoolandia")
  .controller('HabitatsCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function ($scope, $http, RootFactory, $timeout) {
      $scope.title = "I'm the habitats page"
      $scope.apiRoot = null

      RootFactory.getApiRoot()
        .then(
          root => {
            $http.get(`${root.habitats}`)
              .then(res => {
                $scope.habitats = res.data
              });
            $timeout();
          },
          err => console.log("error", err)
        );

    }
  ]);