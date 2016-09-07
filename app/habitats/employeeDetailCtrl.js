'use strict'

angular.module("Zoolandia")
  .controller('EmployeeDetailCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$routeParams',
    function ($scope, $http, RootFactory, $timeout, $routeParams) {
      $scope.title = "I'm the employee detail page"
      $scope.employee = null;

      let logError = (err) => console.log("error", err);

      RootFactory.getApiRoot()
        .then(
          root => $http.get(root.employees + $routeParams.employeeId),
          logError
        )
        .then(
          empRes => {
            $scope.employee = empRes.data;
          },
          logError
        )

    }
  ]);



