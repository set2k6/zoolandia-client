'use strict'

angular.module("Zoolandia")
  .controller('TicketDetailCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$routeParams',
    function ($scope, $http, RootFactory, $timeout, $routeParams) {
      $scope.title = "I'm the ticket detail page"
      $scope.animal = null;
      $scope.habitat = null;

      /*
        1. Get root API document
        2. Get animal information
        3. Get habitat information
       */

      let logError = (err) => console.error("error", err);

      RootFactory.getApiRoot()
        .then(
          root => $http.get(root.tickets + $routeParams.ticketId),
          logError
        )
        .then(
          res => {
            $scope.ticket = res.data;
            return $http.get($scope.ticket.habitat);
          },
          logError
        )
        .then(
          res => {
            $scope.habitat = res.data;
            $timeout();
          },
          logError
        )
    }
  ]);