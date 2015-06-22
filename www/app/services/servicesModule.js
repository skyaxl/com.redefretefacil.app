/**
 * Created by Andrey on 05/06/2015.
 */
var services = angular.module('app.services', ['restangular', 'xc.indexedDB']);

(function () {

    var configServiceModule = function ($indexedDBProvider) {
        $indexedDBProvider
            .connection('rff.database')
            .upgradeDatabase(1.0, function (event, db, tx) {
                var objStore = db.createObjectStore('usuario', {keyPath: 'ssn'});
                objStore.createIndex('email_idx', 'email', {unique: true});
                var cliente = db.createObjectStore('cliente', {keyPath: 'ssn'});
                cliente.createIndex('email_idx', 'email', {unique: true});

                var sessionStore=  db.createObjectStore('session',{keyPath : 'ssn'});
                sessionStore.createIndex('token_idx', 'token', {unique: true});
                sessionStore.createIndex('email_idx', 'email', {unique: true});
            });
    };
    configServiceModule.$inject = ['$indexedDBProvider'];
    services.config(configServiceModule);


    var runServicesModule = function ($cordovaNetwork, $rootScope) {

        document.addEventListener("deviceready", function () {

            var type = $cordovaNetwork.getNetwork();

            $rootScope.$on('$cordovaNetwork:online', function (event, networkState) {
                $rootScope.isOnline = $cordovaNetwork.isOnline();
            });

            $rootScope.$on('$cordovaNetwork:offline', function (event, networkState) {
                $rootScope.isOnline = !$cordovaNetwork.isOnline();
            });

        }, false);

        runServicesModule.$inject = ['$cordovaNetwork', '$rootScope']
        services.run(runServicesModule);

    };


})();