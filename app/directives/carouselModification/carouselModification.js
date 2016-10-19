'use strict';

/* Create module for navbar directive */
angular.module('directives.carouselModification', [])
.directive('carouselModification',
           ['$http',
            function($http) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */
    }
    /* Do the directive's logic here */
    function postFn(scope, element, attr) {
        scope.images=[{image:{}, isSelected:false}];

        scope.GetInput=function(option){
            switch(option){
                case 1:
                    this.AddNewImage();
                    break;
                case 2:
                    break;
            }
        };
        scope.AddNewImage=function(){
            //adds new images
        };
        scope.DeleteImage=function(){
            //deletes images selected
            var temp=[];
            for(var i=0;i<scope.images.length;i++){
                if(!scope.images[i].isSelected){
                    temp.push(scope.images[i].image);
                }
            }
            //temp contains the image that will be deleted
        };


    }
    return {
        restrict: 'E',
        replace: true,
        //change path if will be used on other projects
        templateUrl: 'app/directives/carouselModification/carouselModification.html',
        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);