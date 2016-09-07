'use strict'

angular.module("Zoolandia")
  .controller('AnimalDetailCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$routeParams',
    function ($scope, $http, RootFactory, $timeout, $routeParams) {
      $scope.title = "I'm the animal detail page"
      $scope.animal = null;
      $scope.habitat = null;

      /*
        1. Get root API document
        2. Get animal information
        3. Get habitat information
       */

      let logError = (err) => console.log("error", err);

      RootFactory.getApiRoot()
        .then(
          root => $http.get(root.animals + $routeParams.animalId),
          logError
        )
        .then(
          animalRes => {
            $scope.animal = animalRes.data;
            return $http.get($scope.animal.habitat);
          },
          logError
        )
        .then(
          habitatRes => {
            $scope.habitat = habitatRes.data;
            $timeout();
          },
          logError
        )



      // RootFactory.getApiRoot()
      //   .then(
      //     root => {
      //       $http.get(`${root.animals}${$routeParams.animalId}`)
      //         .then(res => {
      //           $scope.animal = res.data;
      //           $http.get(`${$scope.animal.habitat}`)
      //             .then(res => {
      //               $scope.habitat = res.data;
      //               $timeout();
      //             })
      //         });
      //     },
      //     err => console.log("error", err)
      //   );


    }
  ]);