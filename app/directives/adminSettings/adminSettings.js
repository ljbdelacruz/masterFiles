'use strict';

/* Create module for navbar directive */
angular.module('directives.adminSettings', [])
.directive('adminSettings',
           ['$http',
            function($http) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */

    }
    /* Do the directive's logic here */
    function postFn(scope, element, attr) {
        scope.mode=1;

        scope.ChangeMode = function(num){
            scope.mode=num;
        };
    }
    return {
        restrict: 'E',
        replace: true,
        //change path if will be used on other projects
        templateUrl: 'app/directives/adminSettings/adminSettings.html',
        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);