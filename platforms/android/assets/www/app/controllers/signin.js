'use strict';
(function () {

    var signInController = {};
    signInController.$inject = [];

    signInController = function () {

         this.usersType = [
             {title: 'Tac', discription: 'TRANSPORTADOR AUTÔNOMO DE CARGA'},
             {title: 'Etc', discription: 'EMPRESA DE TRANSPORTE DE CARGA'},
         ];
        this.selectUserType = function(userType){
            this.selectedUserType = userType;
        };


    };

    app.controller('signInController',signInController);


}());