 'use strict';
 (function () {

     var dashboardController = {};
     dashboardController.$inject = ['trucks', 'schedules','$rootScope','schedulesCliente'];

     dashboardController = function (trucks, schedules, $rootScope,clienteStub,schedulesCliente) {

        var self = this;
         self.trucks = clienteStub.cliente.veiculos;
         schedulesCliente =   schedules.where(function(ele){ 
            return self.trucks.any(function(truck){
              return truck.plate == ele.truck.plate;
             });
         });
         self.schedules = schedulesCliente;
         $rootScope.schedulesCliente = schedulesCliente;
         self.agendamentoAtivo = $rootScope.agendamentoAtivo;
        $rootScope.cliente = clienteStub.cliente;
             

         $rootScope.ons.createPopover('popover.html').then(function(popover){
             $rootScope.popover = popover;
         });

         ons.createPopover('popoverSchedule.html').then(function(popover){
             $rootScope.popoverSchedule = popover;
         });
         this.popoveSchedule = function(id,schedule){
             $rootScope.popoverSchedule.show(id);
             self.activeSchedule = schedule;
             $rootScope.agendamentoAtivo = schedule;
         }
         $rootScope.removeSchedule = function(){
             schedules.remove($rootScope.agendamentoAtivo);
             self.schedules.remove($rootScope.agendamentoAtivo);
             $rootScope.agendamentoAtivo.truck.scheduled = false;
             schedulesCliente.remove($rootScope.agendamentoAtivo); 
             $rootScope.popoverSchedule.hide();
         };
       
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
             schedulesCliente.push(newSchedule); 
             $rootScope.navi.popPage();
         };

     };

     
     app.controller('dashboardController',dashboardController);


 }());