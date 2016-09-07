'use strict'

angular.module("Zoolandia")
  .controller('LandingCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function ($scope, $http, RootFactory, $timeout) {
      $scope.title = "I'm the landing page"
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
          res => {
            $scope.apiRoot = res;
            $timeout(); // A safe $scope.$apply()
          },
          err => console.log("error", err)
        );

    }
  ]);







