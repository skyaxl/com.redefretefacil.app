'use strict';
(function () {

    var loginController = {};
    loginController.$inject = ['clientesStub','$rootScope','clienteStub','trucks'];

    loginController = function (clientesStub,$rootScope,clienteStub,trucks) {

        var self = this;
        this.login = { email: '',senha:''}
        this.loginAction = function(){
             var cliente = clientesStub.firstOrDefault(function(ele){
                 return ele.email == self.login.email;
             });

            if(!cliente || cliente.senha != self.login.senha)
            {
                $rootScope.ons.notification.alert({
                    message: 'Email ou senha invalidos'
                });
                return;
            }

            for(var prop in cliente)
            {
                clienteStub[prop] = cliente[prop];
            }

            //clienteStub = cliente;
            $rootScope.navi.pushPage('app/views/home/home.html')
        }

    };



    app.controller('loginController',loginController);


}());
/**
 * Created by Andrey on 31/05/2015.
 */
