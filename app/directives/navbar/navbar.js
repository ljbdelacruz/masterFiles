'use strict';

/* Create module for navbar directive */
angular.module('directives.navbar', [])

/**
 * navbar directive
 */
.directive('navbar',
           ['$http',
            function($http) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */
    }

    /* Do the directive's logic here */
    function postFn(scope, element, attr) {
        scope.items=[{text:'Home'}, {text:'About Us'}, {text:'Contact Us'}];
    }

    return {
        restrict: 'E',

        scope: true,

        replace: true,

        templateUrl: 'app/directives/navbar/navbar.html',

        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);