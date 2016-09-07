'use strict'

angular.module('Zoolandia')
  .config($routeProvider => {
    $routeProvider
      .when('/employees', {
        controller: 'EmployeesCtrl',
        templateUrl: '/app/employees/employees.html'
      })
      .when('/employees/:employeeId', {
        controller: 'EmployeeDetailCtrl',
        templateUrl: '/app/employees/employeeDetail.html'
      })
  })