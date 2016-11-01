'use strict';

/* Create module for navbar directive */
angular.module('directives.temp1Navbar', [])
.directive('temp1Navbar',
           ['$http',
            '$location',
            function($http, $location) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */
    }
    /* Do the directive's logic here */
    function postFn(scope, element, attr) {
        scope.gotoPage=function(spath){
            $location.path(spath);
        };


    }
    return {
        restrict: 'E',
        replace: true,
        //change path if will be used on other projects
        templateUrl: 'app3/directives/subdirectives/template1/navbar/navbar.html',
        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);