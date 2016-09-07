'use strict'

angular.module("Zoolandia")
  .controller('AnimalsCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function ($scope, $http, RootFactory, $timeout) {
      $scope.title = "I'm the animals page"
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
          root => {
            $http.get(`${root.animals}`)
              .then(res => {
                $scope.animals = res.data
              });
            $timeout();
          },
          err => console.log("error", err)
        );


    }
  ]);