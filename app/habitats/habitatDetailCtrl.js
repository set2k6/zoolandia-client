'use strict'

angular.module("Zoolandia")
  .controller('HabitatDetailCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$routeParams',
    function ($scope, $http, RootFactory, $timeout, $routeParams) {
      $scope.title = "I'm the habitat detail page"
      $scope.habitat = null;

      let logError = (err) => console.log("error", err);

      RootFactory.getApiRoot()
        .then(
          root => $http.get(root.habitats + $routeParams.habitatId),
          logError
        )
        .then(
          habitatRes => {
            $scope.habitat = habitatRes.data;
          },
          logError
        )

    }
  ]);



