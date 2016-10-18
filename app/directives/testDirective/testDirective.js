'use strict';

/* Create module for chatbox directive */
angular.module('directives.testDirective', [])

/**
 * chatbox directive
 */
.directive('testDirective',
           ['$http',
            function($http) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */
    }
    /* Do the directive's logic here */
    function postFn(scope, element, attr) {
    }

    return {
        restrict: 'EAC',
        scope: {
            message:'=',
        },
        replace: true,
        templateUrl: 'app/directives/testDirective/testDirective.html',

        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);