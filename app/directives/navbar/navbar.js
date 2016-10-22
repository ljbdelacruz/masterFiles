'use strict';

/* Create module for navbar directive */
angular.module('directives.navbar', [])

/**
 * navigationBar directive
 */
.directive('navbar',
           [
            function () {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                }
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: 'app/directives/navbar/navbar.js',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);