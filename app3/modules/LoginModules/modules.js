'use strict';

angular.module('modules.login', [])
    .config(['$routeProvider',
        function($routeProvider) {
            /* Handle route on location path is '/' */
            $routeProvider.when('/Login', {
                templateUrl: 'app3/modules/LoginModules/LoginModules.html',
                controller: 'LoginCtrl'
            });
        }
    ]);