 'use strict';
 (function () {

     var dashboardController = {};
     dashboardController.$inject = ['trucks', 'schedules','$rootScope'];

     dashboardController = function (trucks, schedules, $rootScope,clienteStub) {

        var self = this;
         self.trucks = clienteStub.veiculos;
         this.schedules = schedules;

         this.setPageTitle = function(title){
             $rootScope.pageTitle = title;
             console.log('titulo :' + title);
         }

         this.fix = function(){

         };
         $rootScope.cliente = clienteStub;

         $rootScope.ons.createPopover('popover.html').then(function(popover){
             $rootScope.popover = popover;
         });

         ons.createPopover('popoverSchedule.html').then(function(popover){
             self.popoverSchedule = popover;
         });
         this.popoveSchedule = function(id,schedule){
             self.popoverSchedule.show(id);
             self.activeSchedule = schedule;
         }
         $rootScope.removeSchedule = function(){
             schedules.remove($rootScope.agendamentoAtivo);
             $rootScope.agendamentoAtivo.truck.scheduled = false;
             self.popoverSchedule.hide();
         };
         self.root = $rootScope;
         self.agendamentoAtivo = $rootScope.agendamentoAtivo;
         this.add = function(truck){
             $rootScope.agendamentoAtivo= self.agendamentoAtivo = self.activeSchedule = {truck:truck};
             $rootScope.pageTitleSchedule = 'Agendar ' + truck.plate;
             $rootScope.navi.pushPage('app/views/home/scheduleAddEdit.html');
         };

         this.save = function(){
             var truck = $rootScope.agendamentoAtivo.truck;
             var newSchedule = {
                 location : self.agentamentoAtivo.cidade,
                 date : self.agendamentoAtivo.data,
                 moment : moment(self.agendamentoAtivo.data,'yyyy-MM-dd'),
                 truck: truck
             };
             truck.scheduled = true;
             schedules.push(newSchedule);
             $rootScope.navi.popPage();
         };

     };

     
     app.controller('dashboardController',dashboardController);


 }());