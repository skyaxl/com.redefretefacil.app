'use strict';
(function () {

    var signInController = {};
    signInController.$inject = [];

    signInController = function () {

        var self = this;
         this.usersType = [
             {title: 'Categoria'},
             {id: 0, title: 'Tac', discription: 'TRANSPORTADOR AUTÔNOMO DE CARGA'},
             {id: 1,title: 'Etc', discription: 'EMPRESA DE TRANSPORTE DE CARGA'},
             {id: 2,title: 'Ctc', discription: 'COOPERATIVA DE TRANSPORTE DE CARGA'},
             {id: 3,title : 'EMPRESA EMBARCADORA'},
             {id: 4,title: 'AGÊNCIA DE CARGAS'}
         ];
        this.selectUserType = function(userType){
            this.selectedUserType = userType;
        };
        this.getDocumentTypeName  = function(userType){

            if(userType ==  self.usersType[0])
             return 'CPF';

            return 'CNPJ';

        };


    };

    app.controller('signInController',signInController);


}());