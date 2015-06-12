/**
 * Created by Andrey on 05/06/2015.
 */
(function(){

    var loginService = function(Restangular,$rootScope,$indexedDB){


        this.login  = function(user,password){

            var sessionStore = $indexedDB.objectStore('session');
            if(!$rootScope.isOnline)
            {

               var query =  $indexedDB.queryBuilder().$index('email_idx').$gt(user).$asc.compile();
                sessionStore.find(query).then(function(sessionObj){
                       $rootScope.session = sessionObj;

                });

              return;
            }

            Restangular.all('conta').post({usuario: user, senha: password }).then(function(data){

            },function(){

            });
        }

    }
    loginService.$inject = ['Restangular','$rootScope','$indexedDB']
    services.factory('loginService',loginService);
});