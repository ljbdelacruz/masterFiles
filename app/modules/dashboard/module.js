'use strict';

angular.module('modules.dashboard', [])

.config(['$routeProvider',
         function($routeProvider) {
    /* Handle route on location path is '/' */
    $routeProvider.when('/Dashboard', {
        templateUrl: 'app/modules/dashboard/dashboard.html',
        controller: 'DashboardCtrl' 
    });
}]);