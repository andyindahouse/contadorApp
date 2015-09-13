'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('contadorApp', ['ionic'])

.run(['$ionicPlatform','$ionicLoading',
  function ($ionicPlatform,$ionicLoading) {

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

      if(!window.localStorage.getItem('amount'))
        window.localStorage.setItem('amount', 0);

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

