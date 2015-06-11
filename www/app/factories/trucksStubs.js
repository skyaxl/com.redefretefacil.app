(function () {
    app.factory("trucks", function () {

        return [];


    });

    var schedulesStub = {};
    schedulesStub.$inject = ['trucks'];
    schedulesStub = function (trucks) {

        return [];


    };
    
    var schedulesClienteStub = {};
    schedulesClienteStub.$inject = [];
    schedulesClienteStub = function () {

        return [];


    };
    
    var clienteStub = {};
    clienteStub.$inject = ['trucks'];
    clienteStub = function(trucks){
        return {
            cliente : {
              veiculos : {}
            }

        };
    };

    var clientesStub = {};
    clientesStub.$inject = [];
    clientesStub = function(){
        return [
            {
                nome: 'Andrey',
                email: 'andrey@rff',
                telefone: '4988899630',
                veiculos: [{
                    plate: 'ALH1234'
                }],
                senha: '123'
            },
            {
                nome: 'Ramire',
                email: 'ramire@rff',
                telefone: '4988899630',
                veiculos: [{
                    plate: 'RDR2111'
                }],
                senha: '123'
            }


        ];
    };


    app.factory("clienteStub", clienteStub);

    app.factory("schedules", schedulesStub);
       app.factory("schedulesCliente", schedulesClienteStub);
    app.factory("clientesStub", clientesStub);

}());