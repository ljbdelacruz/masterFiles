'use strict';

/* Create module for navbar directive */
angular.module('directives.registrationComponent', [])
    .directive('registrationComponent', ['$http',
        '$location',
        function($http, $location) {
            function preFn(scope, element, attr) {
                /* TODO: Do something here before post function */
            }
            /* Do the directive's logic here */
            function postFn(scope, element, attr) {
                scope.months = [{ month: 'Jan' }, { month: 'Feb' }, { month: 'Mar' },
                    { month: 'Apr' }, { month: 'May' }, { month: 'Jun' },
                    { month: 'Jul' }, { month: 'Aug' }, { month: 'Sept' },
                    { month: 'Oct' }, { month: 'Nov' }, { month: 'Dec' }
                ];
                scope.username = "";
                scope.password = "";
                scope.isShowPassword = false;
            }
            return {
                restrict: 'E',
                replace: true,
                //change path if will be used on other projects
                templateUrl: 'app3/directives/subdirectives/RegistrationComponent/RegistrationComponent.html',
                compile: function(scope, element, attr) {
                    return {
                        pre: preFn,
                        post: postFn
                    }
                }
            };
        }
    ]);