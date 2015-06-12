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


 (function () {
     app = angular.module('app', ['onsen','ngMask','ngTouch']);


     var   runModule = function ($rootScope) {
         $rootScope.loadPages = function (navigation) {
             navigation.pushPage('app/views/first/first.html')
         }
         $rootScope.activeHomeCarouselIndex = 0;

         $rootScope.changeItemCarousel = function(carousel){

             carousel.on('postchange',function(event){
                 $rootScope.activeHomeCarouselIndex = event.activeIndex;

                 if ($rootScope.$$phase != '$apply' && $rootScope.$$phase != '$digest') {
                     $rootScope.$digest();
                 }

             });
         };

         document.addEventListener("backbutton", function (e) {
             if ($rootScope.ons.navigator.getPages().length > 1) {
                 e.preventDefault();
                 $rootScope.ons.navigator.popPage();
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
     runModule.$inject = ['$rootScope'];
     app.run(runModule);

 }());