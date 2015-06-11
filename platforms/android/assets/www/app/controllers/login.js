'use strict';
(function () {

    var loginController = {};
    loginController.$inject = ['clientesStub','$rootScope','clienteStub','trucks'];

    loginController = function (clientesStub,$rootScope,clienteStub,trucks) {

        var self = this;
        $rootScope.loginCliente = { email: '',senha:''};
        self.loginAction = function(){
             var cliente = clientesStub.firstOrDefault(function(ele){
                 return ele.email == $rootScope.loginCliente.email;
             });

            if(!cliente || cliente.senha != $rootScope.loginCliente.senha)
            {
                $rootScope.ons.notification.alert({
                    message: 'Email ou senha invalidos'
                });
                return;
            }
 
            clienteStub.cliente = cliente;
            $rootScope.navi.pushPage('app/views/home/home.html');
            $rootScope.loginCliente = { email: '',senha:''};
        }

    };



    app.controller('loginController',loginController);


}());
/**
 * Created by Andrey on 31/05/2015.
 */
