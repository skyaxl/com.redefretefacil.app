/**
 * Created by Andrey on 05/06/2015.
 */
(function(){

    var clenteService = function(Restangular,$rootScope,$indexedDB){


        this.save = function(cliente){

            if(!$rootScope.isOnline)
            {
                $indexedDB.openStore('cliente',function(){
                    $indexedDB.objectStore('cliente').insert(cliente);
                });

                return;

            }
            if(cliente.id == 0)
            {
                Restangular.all('clientes').post(cliente).then(function(result){

                },function(error){
                    $indexedDB.openStore('cliente',function(){
                        $indexedDB.objectStore('cliente').insert(cliente);
                    });

                });
                return;
            }

            Restangular.all('clientes').put(cliente);

        }


        this.saveChanges = function(){

            $indexedDB.openStore('cliente',function(){
                $indexedDB.objectStore('cliente').getAll().then(function(clientes){



                });
            });
        }
        clenteService.$inject = ['Restangular','$rootScope','$indexedDB']
        services.factory('loginService',loginService);
    }
    clenteService.$inject = ['Restangular','$rootScope','$indexedDB']



});
