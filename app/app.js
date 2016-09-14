'use strict'

angular.module('Zoolandia', ['ngRoute'])
  .constant('apiUrl', "http://localhost:8000")

  .config($httpProvider => {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  });


angular.module('Zoolandia').factory('RootFactory', [
    "$http",
    "$timeout",
    "apiUrl",

    ($http, $timeout, apiUrl) => {
      let apiRoot = null;
      let httpGet = $http.get(apiUrl);
      let userCredentials = {};

      return {
        getApiRoot () {
          return httpGet.then(res => res.data)
        },
        credentials (creds) {
          if (creds) {
            userCredentials = creds;
          } else {
            if (userCredentials.hasOwnProperty("password")) {
              return window.btoa(`${userCredentials.username}:${userCredentials.password}`);
            } else {
              return false;
            }
          }
        }
      }
    }
  ])

  .filter('capitalize', () => {
    return (thingToChange) => {
      return thingToChange.charAt(0).toUpperCase() + thingToChange.slice(1)
    }
  });













