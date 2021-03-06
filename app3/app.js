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
                'directives.navbar',
                'directives.loginComponent',
                'directives.registrationComponent',
                'directives.carouselImage',
                'modules.login',
                'modules.dashboard',
                'modules.websiteChooser',
                'modules.template1',
            ])
            .config(['$routeProvider',
                function($routeProvider) {
                    $routeProvider.otherwise({ redirectTo: '/Websites' });
                }
            ]);
        /* Start the angular app */
        angular.bootstrap(document, ['ngStarterKit']);
    });