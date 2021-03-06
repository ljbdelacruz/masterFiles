'use strict';

/* Wait for all resources to be downloaded */
angular
    .element(document)
    .ready(function() {
        /**
        * ngStarterKit Module
        *
        * Description:
        *   A simple boilerplate for angularjs developers
        */
        angular.module('ngStarterKit', [
                'ngRoute',
                /* Directives */
                'directives.navbar',
                'directives.modifyNews',
                'directives.viewOrder',
                'directives.adminSettings',
                'directives.testDirective',
                'directives.cartComponent',
                'directives.userModification',
                'directives.createMessage',
                /* Modules */
                'modules.dashboard',
            ])
            .config(['$routeProvider',
                     function($routeProvider) {
                $routeProvider.otherwise({ redirectTo : '/Dashboard' });
            }]);

        /* Start the angular app */
        angular.bootstrap(document, ['ngStarterKit']);
    });
