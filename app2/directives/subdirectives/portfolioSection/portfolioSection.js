'use strict';

/* Create module for navbar directive */
angular.module('directives.portfolioSection', [])
.directive('portfolioSection',
           ['$http',
            '$location',
            function($http, $location) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */
    }
    /* Do the directive's logic here */
    function postFn(scope, element, attr) {
    }
    return {
        restrict: 'E',
        replace: true,
        //change path if will be used on other projects
        templateUrl: 'app2/directives/subdirectives/portfolioSection/portfolioSection.html',
        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);