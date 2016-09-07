angular.module("Zoolandia")
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        controller: "LandingCtrl",
        templateUrl: "/app/landing/landing.html"
      })
  })
