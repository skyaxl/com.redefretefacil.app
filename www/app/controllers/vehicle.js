'use strict';
(function () {

    var vehicleController = {};
    vehicleController.$inject = ['clienteStub','$rootScope'];

    vehicleController = function (clienteStub,$rootScope) {

        var self = this;
        self.veiculoAtivo = $rootScope.veiculoAtivo;
        $rootScope.cliente = clienteStub.cliente;
        self.pageVeiculoTitle =$rootScope.pageVeiculoTitle
        self.plateEnabled = true;
        self.editAddVehicle = function(vehicle){
            if(!vehicle)
            {
                $rootScope.pageVeiculoTitle = 'Novo Veículo';
                self.veiculoAtivo = {};
                $rootScope.navi.pushPage('app/views/veihcles/vehicleEditAdd.html');
                self.plateEnabled = true;
                return;
            }
            $rootScope.pageVeiculoTitle = 'Editar Veículo';
            self.plateEnabled = false;
            $rootScope.navi.pushPage('app/views/veihcles/vehicleEditAdd.html');
            self.veiculoAtivo = vehicle;
            $rootScope.veiculoAtivo = self.veiculoAtivo;
        };
        this.save = function(){
            if(!$rootScope.cliente.veiculos.any(function(ele){ele.plate == self.veiculoAtivo.plate })){
                $rootScope.cliente.veiculos.push( self.veiculoAtivo);

            }
            $rootScope.navi.popPage();

        }

        this.veihcleType = [
            {id:1, title :"VUC 3/4 (até 3 ton)"},
            {id:8, title :"Bitrem 07 eixos (até 37 ton)"},
            {id:9, title :"Bitrem 09 eixos (até 42 ton)"},
            {id:10, title :"Rodotrem 09 eixos (até 54 ton)"},
            {id:2, title :"Toco (até 6 ton)"},
            {id:3, title :"Truck (até 14 ton)"},
            {id:4, title :"Bi-Truck (até 20 ton)"},
            {id:5, title :"Carreta Simples 4x2 (até 27 ton)"},
            {id:6, title :"Carreta Traçada 6x4 (até 32 ton)"},
            {id:7, title :"Carreta Trucada 6x2 (até 32 ton)"},
            {id:11, title :"Van, Utilitários e Caminhonetes"}];

        this.veihcleBodyType = [{id:1, title : "Graneleiro"},
            {id:2, title : "Grade Baixa (Carga seca)"},
            {id:3, title : "Baú"},
            {id:4, title : "Sider"},
            {id:5, title : "Basculante (Caçamba)"},
            {id:6, title : "Porta container"},
            {id:8, title : "Canavieiro"},
            {id:9, title : "Tanque"},
            {id:10, title : "Frigorífico"},
            {id:11, title : "Silo rodoviário"},
            {id:12, title : "Transportes de Tora (Florestal)"},
            {id:13, title : "Prancha"},
            {id:14, title : "Cegonheiro"},
            {id:15, title : "Guincho"},
            {id:16, title : "Munk"},
            {id:17, title : "Transportes de animais (Boiadeiro, Gaiolas e Similares)"}]


    };


    app.controller('vehicleController',vehicleController);


}());
