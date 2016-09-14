'use strict'

angular.module("Zoolandia")
  .controller('TicketsCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function ($scope, $http, RootFactory, $timeout) {
      $scope.title = "I'm the tickets page"
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
          root => {
            $http.get(`${root.tickets}`)
              .then(res => {
                $scope.tickets = res.data
              });
            $timeout();
          },
          err => console.log("error", err)
        );


    }
  ]);