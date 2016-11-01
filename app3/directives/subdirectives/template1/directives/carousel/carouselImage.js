'use strict';

/* Create module for navbar directive */
angular.module('directives.carouselImage', [])
.directive('carouselImage',
           ['$location',
            function ($location){
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {

                }
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {
                        slides: "=",
                        slideInterval: "=",
                        isShowButton: "=",
                    },
                    templateUrl: 'app3/directives/subdirectives/template1/directives/carousel/carouselImage.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
}]);