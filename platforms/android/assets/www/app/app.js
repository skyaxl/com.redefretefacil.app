 'use strict';
 var app = null;
 Array.prototype.any = function(fn){
     if(!this)
      return false;

     for(var i = 0; i < this.length;i++)
     {
         if(fn(this[i]))
          return true;
     }
     return false;
 };
 Array.prototype.firstOrDefault = function(fn){
     if(!this)
         return false;
     for(var i = 0; i < this.length;i++)
     {
         if(fn(this[i]))
            return this[i];
     }
     return null;
 };

 Array.prototype.remove = function(ele){
     if(!this)
         return false;

     this.splice(this.indexOf(ele),1);


 };
 Array.prototype.pushMultiple = function(array){
    for(var i = 0;i < array.length;i++)
      this.push(array[i]);

 };

Array.prototype.where = function(fn){
     if(!this)
         return [];
    var newArray = []
    
     for(var i = 0; i < this.length;i++)
     {
         if(fn(this[i]))
             newArray.push(this[i]);
     }
     return newArray;
 };



 (function () {
     app = angular.module('app', ['onsen','ngMask','ngTouch']);
     var runModule = {}
     runModule.$inject = ['$rootScope','clienteStub'];

     runModule = function ($rootScope,clienteStub) {
         $rootScope.loadPages = function (navigation) {
             navigation.pushPage('app/views/first/first.html')
         }
         $rootScope.activeHomeCarouselIndex = 0;

         $rootScope.signin = function(){
        
             clienteStub.cliente = {};
             clienteStub.cliente.veiculos = [];
            $rootScope.navi.pushPage('app/views/signin/profile.html')  
         }
         
          $rootScope.signout = function(){
             
             clienteStub.cliente = {};
             clienteStub.cliente.veiculos = [];
            $rootScope.navi.pushPage('index.html');
              $rootScope.popover.hide();
         }
          
          $rootScope.animeHideAct = function(){
              $rootScope.animeHide = true;
              setTimeout(function(){
                $rootScope.animeHideComplete = true;
                $rootScope.$digest();
              },500);
          }
          
         $rootScope.setPageTitle = function(title){
             $rootScope.pageTitle = title;
         }
         
         $rootScope.changeItemCarousel = function(carousel){

             carousel.on('postchange',function(event){
                 $rootScope.activeHomeCarouselIndex = event.activeIndex;

                 if ($rootScope.$$phase != '$apply' && $rootScope.$$phase != '$digest') {
                     $rootScope.$digest();
                 }

             });
         };

         document.addEventListener("backbutton", function (e) {
             if ($rootScope.navi && $rootScope.navi.getPages().length > 1) {
                 e.preventDefault();
                 $rootScope.navi.popPage();
             } else {
                 navigator.app.exitApp();
             }
         }, false);

         $rootScope.changeClick = function(carousel,index)
         {
             carousel.setActiveCarouselItemIndex(index);
             $rootScope.changeItemCarousel = index;
         } 


     };

     app.run(runModule);

 }());