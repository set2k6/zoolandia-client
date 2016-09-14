'use strict'

angular.module("Zoolandia")
  .controller('TicketFormCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$routeParams',
    function ($scope, $http, RootFactory, $timeout, $routeParams) {
      $scope.title = "I'm the ticket creation page"
      $scope.habitats = null;
      $scope.users = null;
      $scope.root = null;

      let logError = (err) => console.error("error", err);

      RootFactory.getApiRoot()
        .then(
          root => {
            $scope.root = root;
            return $http.get(root.habitats)
          },
          logError
        )
        .then(
          res => {
            $scope.habitats = res.data;
            return $http.get($scope.root.users);
          },
          logError
        )
        .then(
          res => {
            $scope.users = res.data;
            $timeout();
          },
          logError
        );

      $scope.purchase = () => {

        console.log("$scope.selectedUser", $scope.selectedUser);
        console.log("$scope.selectedHabitat", $scope.selectedHabitat);


        $http({
          url: $scope.root.tickets,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: {
            "user": $scope.selectedUser.id,
            "habitat": $scope.selectedHabitat.id
          }
        }).success(res => {
          if (res.success === true) {
              $location.path('/tickets');
          } else {
              // Show dialog element telling user that registration failed
          }
        }).error(() => {
          // Show dialog element telling user that registration failed
        });

      }

    }
  ]);
