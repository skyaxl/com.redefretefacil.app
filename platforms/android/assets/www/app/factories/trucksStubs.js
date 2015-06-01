(function () {
    app.factory("trucks", function () {

        return [];


    });

    var schedulesStub = {};
    schedulesStub.$inject = ['trucks'];
    schedulesStub = function (trucks) {

        return [];


    };
    var clienteStub = {};
    clienteStub.$inject = ['trucks'];
    clienteStub = function(trucks){
        return {
            veiculos : trucks

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
            }


        ];
    };


    app.factory("clienteStub", clienteStub);

    app.factory("schedules", schedulesStub);
    app.factory("clientesStub", clientesStub);

}());