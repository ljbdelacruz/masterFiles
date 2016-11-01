'use strict';

angular.module('modules.websiteChooser', [])
    .config(['$routeProvider',
        function($routeProvider) {
            /* Handle route on location path is '/' */
            $routeProvider.when('/Websites', {
                templateUrl: 'app3/modules/websiteChooser/websiteChooser.html',
                controller: 'WebsitesCtrl'
            });
        }
    ]);