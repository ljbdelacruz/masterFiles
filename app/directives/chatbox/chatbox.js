'use strict';

/* Create module for chatbox directive */
angular.module('directives.chatbox', [])

/**
 * chatbox directive
 */
.directive('chatbox',
           ['$http',
            function($http) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */
    }

    /* Do the directive's logic here */
    function postFn(scope, element, attr) {

    }

    return {
        restrict: 'E',

        scope: true,

        replace: true,

        templateUrl: 'app/directives/chatbox/chatbox.html',

        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);