 'use strict';
 (function () {

     var dashboardController = {};
     dashboardController.$inject = ['trucks', 'schedules'];

     dashboardController = function (trucks, schedules) {

         this.trucks = trucks;
         this.schedules = schedules;
         var scheduleEnumerable = Enumerable.From(this.schedules);
         this.notScheduledTrucks = Enumerable.From(this.trucks).Where(function (truck) {
             return !scheduleEnumerable.Any(function (schedule) {
                 return schedule.truck.plate == truck.plate;
             });
         }).ToArray();


     };
     
     app.controller('dashboardController',dashboardController);


 }());