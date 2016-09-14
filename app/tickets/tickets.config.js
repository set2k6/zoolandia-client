'use strict'

angular.module('Zoolandia')
  .config($routeProvider => {
    $routeProvider
      .when('/tickets', {
        controller: 'TicketsCtrl',
        templateUrl: '/app/tickets/tickets.html'
      })
      .when('/tickets/new', {
        controller: 'TicketFormCtrl',
        templateUrl: '/app/tickets/ticketForm.html'
      })
      .when('/tickets/:ticketId', {
        controller: 'TicketDetailCtrl',
        templateUrl: '/app/tickets/ticketDetail.html'
      })
  })