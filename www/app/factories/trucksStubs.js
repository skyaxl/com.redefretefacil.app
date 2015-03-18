(function () {
    app.factory("trucks", function () {

        return [{
                id: 1,
                plate: 'AAA-1234'
                },
            {
                id: 2,
                plate: 'BBB-1234'
                }
        ];


    });

    var schedulesStub = {};
    schedulesStub.$inject = ['trucks']
    schedulesStub = function (trucks) {

        return [{
                id: 1,
                date: '01/04/2015',
                truck: trucks[0],
                location: 'Lages-SC',
                moment: moment(this.date)
           
                }
        ];


    };


    app.factory("schedules", schedulesStub);


}());