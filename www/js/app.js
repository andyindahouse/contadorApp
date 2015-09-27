'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('contadorApp', ['ionic', 'angularRipple'])

.run(['$ionicPlatform','$ionicLoading', '$window',
  function ($ionicPlatform,$ionicLoading, $window) {

    /*
        CASOS DE USO:

        1) Primera vez que entra el usuario
        2) Sucesivas veces que entra
          2a) Existe seleccionado (no se realiza ninguna acción)
          2b) No existe seleccionado
    */

    var selected = $window.localStorage.getItem('selected');
    var items = JSON.parse($window.localStorage.getItem('items'));

    var crearDef = function () {

      var def = {
        name: 'default',
        amount: 0
      };

      items = {};

      items[def.name] = def; 

      $window.localStorage.setItem('items', JSON.stringify(items));
      selected = def.name;
      $window.localStorage.setItem('selected', def.name);
    };

    if(!items){
      crearDef();
    }

    if(items && !items.hasOwnProperty(selected)){
      crearDef();
    }    

    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

    });
}])

.config(['$stateProvider','$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'js/app.html'      
    })

    .state('app.home', {
      url: '/home',
      views: {
        'content@app': {
          controller: 'HomeCtrl',
          templateUrl: 'js/home.html'
        }
      }
    })

    .state('app.list', {
      url: '/list',
      views: {
        'content@app': {
          controller: 'HomeCtrl',
          templateUrl: 'js/list.html'
        }
      }
    });

    $urlRouterProvider.otherwise('/app/home');
}]);

