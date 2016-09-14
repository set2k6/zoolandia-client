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

      RootFactory.getApiRoot()
        .then(
          root => $http.get(root.tickets + $routeParams.ticketId),
          console.error
        )
        .then(
          res => {
            $scope.ticket = res.data;
            return $http.get($scope.ticket.habitat);
          },
          console.error
        )
        .then(
          res => {
            $scope.habitat = res.data;
            $timeout();
          },
          console.error
        )
    }
  ]);