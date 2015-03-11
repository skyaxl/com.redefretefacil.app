 'use strict';
 var app = null;
 (function () {
     app = angular.module('app', ['onsen']);
     var runModule = {}
     runModule.$inject = ['$rootScope'];

     runModule = function ($rootScope) {
         $rootScope.loadPages = function (navigation) {
             navigation.pushPage('app/views/first/first.html')
         }


     };

     app.run(runModule);

 }());