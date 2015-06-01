'use strict';
(function () {

    var signInController = {};
    signInController.$inject = ['$scope','$rootScope','clienteStub','schedules','clientesStub'];

    signInController = function ($scope,$rootScope,clienteStub,schedules,clientesStub) {

        var self = this;
        self.cliente = clienteStub;
        self.pageVeiculoTitle = 'Cadastro';


         this.usersType = [
             {id: 0, title: 'TAC', discription: 'TRANSPORTADOR AUTÔNOMO DE CARGA'},
             {id: 1,title: 'ETC', discription: 'EMPRESA DE TRANSPORTE DE CARGA'},
             {id: 2,title: 'CTC', discription: 'COOPERATIVA DE TRANSPORTE DE CARGA'},
             {id: 3,title : 'EMPRESA EMBARCADORA'},
             {id: 4,title: 'AGÊNCIA DE CARGAS'}
         ];

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



        this.selectUserType = function(userType){
            this.selectedUserType = userType;
        };



        this.validDocumento = function(){
            var invalid = !/[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/.test(self.cliente.documento);
            if(invalid)
            {
                self.cliente.documento = '';
                return false;
            }

            $scope.navi.pushPage('app/views/signin/contact.html');
            return invalid;


        };

        this.validarTelefone = function(){

            if(!self.cliente.veiculos.length)
            {
                self.veiculoAtivo = {};
            }
            else{
                self.veiculoAtivo = self.cliente.veiculos[0];
            }

            $scope.navi.pushPage('app/views/signin/veihcle.html');

        }

        this.validarVeiculo = function(){
            self.cliente.veiculos.push(self.veiculoAtivo)
            $scope.navi.pushPage('app/views/signin/scheduleForm.html');
        }

        this.validarAgendamento = function(){

            var newSchedule = {
                location : self.agentamentoAtivo.cidade,
                date : self.agendamentoAtivo.data,
                moment : moment(this.date,'yyyy-MM-dd'),
                truck: self.cliente.veiculos[0]
            };
            schedules.push(newSchedule);
            $scope.navi.pushPage('app/views/signin/finish.html');
            clientesStub.push(self.cliente);
        }

    };

    app.controller('signInController',signInController);


}());