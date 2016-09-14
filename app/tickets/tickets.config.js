'use strict'

/*
  Promise used to decorate routes that require a login before
  they can be rendered
 */
let requiresAuth = ($location, RootFactory) => new Promise((resolve, reject) => {
  if (RootFactory.credentials()) {
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
    $location.path("/login");
  }
});

angular.module('Zoolandia')
  .config($routeProvider => {
    $routeProvider
      .when('/tickets', {
        controller: 'TicketsCtrl',
        templateUrl: '/app/tickets/tickets.html'
      })
      .when('/tickets/new', {
        controller: 'TicketFormCtrl',
        templateUrl: '/app/tickets/ticketForm.html',
        resolve: { requiresAuth }
      })
      .when('/tickets/:ticketId', {
        controller: 'TicketDetailCtrl',
        templateUrl: '/app/tickets/ticketDetail.html'
      })
  })




