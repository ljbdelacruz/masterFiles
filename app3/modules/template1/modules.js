'use strict';

angular.module('modules.template1', [])
    .config(['$routeProvider',
        function($routeProvider) {
            /* Handle route on location path is '/' */
            $routeProvider.when('/Template1', {
                templateUrl: 'app3/modules/template1/template1.html',
                controller: 'template1Ctrl'
            });
        }
    ]);